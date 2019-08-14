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

// function leftRotate(a,n,d) {
    
//     let gcd1 = gcd(n, d);
//     let j, k,temp;
//     for (let i = 0; i < gcd1; i++){
//         temp = a[i];
//         j = i;
//         while (true) {
//             k = j + d;
//             if (k >= n) {
//                 k = k - n;
//             }
//             if (k == i) break;
//             a[j] = a[k];
//             j = k;
//         }
//         a[j] = temp;
//     }
//         return a;
// }

function leftRotate(a,n,d){
    reverse(a,0,d-1);
    reverse(a,d,n-1);
    reverse(a,0,n);
    console.log(a);
    return a;
}


function reverse (arr, start, end){
    while(start<end){
        let temp= arr[start];
        arr[start] = arr[end]; 
        arr[end] = temp;
        start++;
        end--;
    }

}

// function gcd(n1, n2) {
//     if (n1 == 0) return n2;
//     if (n2 == 0) return n1;
//     if (n1 > n2) return gcd(n1 - n2, n2);
//     else {return gcd(n2-n1,n1)}
// }


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = leftRotate(a, n, d);

    ws.write(result.join(' ') + '\n');

    ws.end();

}
