let arr =  [15, 18, 2, 3, 6, 12];


function findPivot(arr,low,high){
    // let low = 0;
    // let high = arr.length;
    console.log(low,high,"high");
    let mid = Math.floor((low+high)/2);
    if(low>high) return 0;
    if(low==high) return low;

    if(arr[mid]>arr[high] && arr[mid]> arr[mid+1]) return mid+1;
    if(arr[mid] < arr[high] && arr[mid] > arr[mid-1] ) return mid;
    if(arr[mid]> arr[low]) return findPivot(arr,mid+1,high);
    else {
        return findPivot(arr,0,mid);
    } 
}


console.log(findPivot(arr,0,arr.length-1));