function main(arr, n, key) {
    let pivotPoint = findPivot(arr, 0, n - 1);
    // console.log(pivotPoint, ">>>>");
    if (pivotPoint == -1) return bst(arr, 0, n - 1, key);
    if (arr[pivotPoint] == key) return pivotPoint;
    // if(arr[pivotPoint]>arr[0]) return bst(arr,0,pivotPoint-1,key);
    // else return bst(arr,pivotPoint+1,high,key);
    if (arr[0] <= key) {
        // console.log("1trbt");
        return bst(arr, 0, pivotPoint - 1, key);
    }
    else {
        // console.log('8u86752',"");
        // console.log(bst(arr, pivotPoint + 1, n-1, key),"value");
        return bst(arr, pivotPoint + 1, n-1, key);
    }
}


function findPivot(arr, low, high) {
    if (high < low) return -1;
    if (high == low) return low;
    let mid = Math.floor((low + high) / 2);
    if (mid < high && arr[mid] > arr[mid + 1]) return mid;
    if(mid>low && arr[mid]<arr[mid-1])  return mid-1;
    // if (arr[mid] < arr[high]) return findPivot(ar, low, mid - 1);
    // return findPivot(ar, mid + 1, high);
    if(arr[low]>=arr[mid]) return findPivot(arr,low,mid-1);
    else return findPivot(arr,mid+1,high);
}



function bst(ar, low, high, key) {
    // console.log(low,"low");
    // console.log(high,"high");
    if (high < low) return -1;
    let mid = Math.floor((low + high) / 2);
    if (key == ar[mid]) return mid;
    if (key > ar[mid]) return bst(ar, mid + 1, high, key);
    return bst(ar, low, mid - 1, key);
}

let arr = [5, 8, 9, 10, 13, 3, 4];
let n = 7;
let key = 3;
// main(arr, n, key);

console.log(main(arr, n, key));


