'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    a = a.sort().reverse();
    let acum = 0;
    let longest = 0;
    for(let i = 0;(i < a.length - 1) || (i - a.length < longest); i++){
        acum = 0;
        for(let j = i+1;i < a.length - 2; j++){
        	console.log(a[i],a[j],Math.abs(a[i] - a[j]))
            if(Math.abs(a[i] - a[j]) <= 1){
                acum++;
            }else{
                break;
            }
        }
        if(acum > longest)longest = acum;
    }
    return longest+1;
}

function main() {
    const ws = fs.createWriteStream('output');

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
