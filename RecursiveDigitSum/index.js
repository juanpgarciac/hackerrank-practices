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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here


    n = n;
    while(n.toString().length > 1){
        n = n.toString().split('').reduce( (a,c) => parseInt(a)+parseInt(c)  );
    }
    n = n * k; 
    while(n.toString().length > 1){
        n = n.toString().split('').reduce( (a,c) => parseInt(a)+parseInt(c)  );
    }

    return n;
}

function main() {
    const ws = fs.createWriteStream('output');

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
