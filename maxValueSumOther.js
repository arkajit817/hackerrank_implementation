let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrSumCalc (arr){
    let arrSum = 0;
    let currVal = 0;
    let n = arr.length;
    for(let i=0;i< arr.length;i++){
        arrSum += arr[i];
        currVal += i*arr[i];
    }

    let currSum = currVal;
    for(let j=1;j<arr.length;j++){
        currVal = currVal - ( arrSum - arr[j-1]) + (n-j)*arr[j-1];
        currSum = Math.max(currVal,currSum);
    }
    return currSum;
}

console.log(arrSumCalc(arr));