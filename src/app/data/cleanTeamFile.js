const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'teams');
const nflPlayerByTeamHistory = {}
const nflPlayerHistory = {};
const mvps = require('./stats/mvp.json');
const hofs = require('./stats/hof.json');

fs.readdir(directoryPath, function (err, files) {
    files.forEach(function (file) {
        const lineups = JSON.parse(
            fs.readFileSync(`${directoryPath}/${file}`)
        );

        let uniquePlayers = new Set([])
        lineups.forEach(lineup => {
            uniquePlayers = new Set([...uniquePlayers, ...parseSkill(lineup.Skill)]);
            //parseOffLine(lineup['Off. Line']);
        });
        
        const team = file.replace('.json', '');
        Array.from(uniquePlayers).forEach(player => {
            (nflPlayerHistory[player] || (nflPlayerHistory[player] = [])).push(team);
        });
    });

    mvps.forEach(mvp => {
        (nflPlayerHistory[mvp] || (nflPlayerHistory[mvp] = [])).push('mvp');
    });

    hofs.forEach(hof => {
        (nflPlayerHistory[hof] || (nflPlayerHistory[hof] = [])).push('hof');
    });


    // fs.writeFileSync(`${directoryPath}/../stats/nflPlayersByTeam.json`, JSON.stringify(nflPlayerByTeamHistory));
    fs.writeFileSync(`${directoryPath}/../stats/nflPlayers.json`, JSON.stringify(nflPlayerHistory));
});

function parseSkill(blob){
    const matcher = new RegExp('(QB )|( RB)|( FB)|( WR)|( LH)|( RH)|( TE)|(FL )|( HB)', 'g');

    blob = blob.replaceAll('*', '')
        .replaceAll('+', '')
        .replaceAll(matcher, ', ')

    players = blob.split(',').filter(player => {
        if(player === '') return false;
        return true;
    }).map(player => {
        return player.trim();
    });

    return players;
    // console.log(players)
}

function parseOffLine(blob){
    const matcher = new RegExp('( C)|(LT )|( RG)|( RT)|(LE )|( LG)|( RE)', 'g');

    blob = blob.replaceAll('*', '')
        .replaceAll('+', '')
        .replaceAll(matcher, ', ')

    players = blob.split(',').map(player => {
        return player.trim();
    });

    //console.log(players)
}

function parseDefLine(){

}

function parseLineBackers(){

}

function parseSecondary(){

}

function parseSpTeams(){

}