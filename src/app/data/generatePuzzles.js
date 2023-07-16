const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname);

const teams = [
    '49ers',
    'bears',
    'bengals',
    'bills',
    'broncos',
    'browns',
    'buccaneers',
    'cardinals',
    'chargers',
    'chiefs',
    'colts',
    'commanders',
    'cowboys',
    'dolphins',
    'eagles',
    'falcons',
    'giants',
    'jaguars',
    'jets',
    'lions',
    'packers',
    'panthers',
    'patriots',
    'raiders',
    'rams',
    'ravens',
    'saints',
    'seahawks',
    'steelers',
    'texans',
    'titans',
    'vikings'
]

const awards = [
    'mvp',
    'hof'
]

function generatePuzzles(){
    let today = new Date();
    const puzzles = {}

    //generate 100 days worth of puzzles
    for(let i = 0; i < 100; i++){
        puzzles[today.toLocaleDateString()] = getPuzzle();
        today.setDate(today.getDate() + 1);
    }

    fs.writeFileSync(`${directoryPath}/puzzles.json`, JSON.stringify(puzzles));
}

function getPuzzle(){
    let randomTeams = [];
    while(randomTeams.length < 5){
        const r = Math.floor(Math.random() * (31 - 0 + 1))
        if(randomTeams.indexOf(r) === -1) randomTeams.push(r);
    }
   
    const award = awards[Math.floor(Math.random()*awards.length)];

    return [teams[randomTeams[0]], teams[randomTeams[1]], award, teams[randomTeams[2]], teams[randomTeams[3]], teams[randomTeams[4]]]
}

generatePuzzles();