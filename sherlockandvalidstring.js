'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the isValid function below.
function isValid(s) {

    let uchar = {};
    let arr = [];
    let str = s.replace(/\S/g, function (l) {
        uchar[l] = isNaN(uchar[l]) ? 1 : uchar[l] + 1;
    })
    for (let key in uchar) {
        arr.push(uchar[key]);
    }
    let arr1 = arr.sort();
    if (arr1.length == 1) return 'YES';
    if (arr1[arr1.length] - arr1[0] > 1) return 'NO';
    if (arr1[0] == 1) {
        let diff = 0;
        for (let j = 1; j < arr1.length - 1; j++){
            let df = 0;
            df = arr1[j] - arr1[j + 1];
            diff = df;
            if (df != 0) return 'NO';
        }
        if (diff == 0) return 'YES';
    }
    let maindiff = 0;
    for (let g = 0; g < arr1.length-1; g++){
        maindiff = arr1[g] - arr1[g + 1];
    }
    if (maindiff == 0) return 'YES';

    let newArr = arr1;
    newArr[newArr.length-1] = arr1[arr1.length-1] - 1;
    for (let k = 0; k < newArr.length-1; k++){
        let df2 = 0;
        df2 = newArr[k] - newArr[k + 1];
        if (df2 != 0) return 'NO';
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
