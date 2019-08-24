let arr = [11, 15, 26, 38, 9, 10];
let n = arr.length;
let sum = 25;

function check(arr, n, element) {
    console.log(arr,n,element,">")
    let i = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) break;
    }

    let l = (i + 1) % n;
    let r = i;


    while (l != r) {
        if (arr[l] + arr[r] == element) return true;
        if (arr[l] + arr[r] < element) {
            l = (l + 1) % n;
        } else {
            r = (n + r - 1) % n;
        }

        return false;

    }


}

console.log(check(arr,n,sum));