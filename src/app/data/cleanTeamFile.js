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
            uniquePlayers = new Set([...uniquePlayers, ...parseOffLine(lineup['Off. Line'])]);
            uniquePlayers = new Set([...uniquePlayers, ...parseDefLine(lineup['Def. Line'])]);
            uniquePlayers = new Set([...uniquePlayers, ...parseLineBackers(lineup.Linebackers)]);
            uniquePlayers = new Set([...uniquePlayers, ...parseSecondary(lineup.Secondary)]);
            uniquePlayers = new Set([...uniquePlayers, ...parseSpTeams(lineup['Sp. Teams'])]);
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
    const matcher = new RegExp('(QB )|( RB)|( BB)|( WB)|( FB)|( WR)|( LH)|( RH)|( TE)|(FL )|(HB )|(TB )', 'g');

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
}

function parseOffLine(blob){
    const matcher = new RegExp('(C)|(LT)|(RG)|(RT)|(LE)|(LG)|(RE)', 'g');

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
}

function parseDefLine(blob){
    const matcher = new RegExp('(LDE)|(NT)|(RDE)|(RDT)|(LDT)|(MG)|(DT)', 'g');

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
}

function parseLineBackers(blob){
    const matcher = new RegExp('(LLB)|(RLB)|(MLB)|(LOLB)|(LILB)|(ROLB)|(RILB)', 'g');

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
}

function parseSecondary(blob){
    const matcher = new RegExp('(LDH)|(RDH)|( S )|(SS )|( FS )|(LCB)|(RCB)|( DB )', 'g');

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
}

function parseSpTeams(blob){
    const matcher = new RegExp('(PR)|(KR)|(RDE)|(RDT)|(LDT)|(MG)|(DT)', 'g');

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
}