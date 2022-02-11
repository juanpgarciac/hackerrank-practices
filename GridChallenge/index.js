'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
    console.log(inputStdin);
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    let cols = [];
    grid = grid.map( (s,i) => { 
    	return  s.split('').sort().join('').replace("\r",''); 
	} )
	let slen = grid[0].length;
	for(let i=0;i<slen;i++){
	    for(let j=0;j<grid.length-1;j++){
    		if(grid[j][i]>grid[j+1][i]) 
	    		return 'NO';
	    }
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream('ouput');

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
