let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function maxSum(arr){
    let arrSum = 0;
    let currVal = 0;
    for(let i=0;i< arr.length;i++){
        arrSum += arr[i];
        currVal += i*arr[i];
    }
    let maxVal = currVal;
    for(let j=1;j<arr.length;j++){
        currVal = currVal + arrSum - (arr.length)*arr[arr.length-j];
        if(currVal> maxVal) maxVal = currVal;
    }
    return maxVal;
}


console.log(maxSum(arr));