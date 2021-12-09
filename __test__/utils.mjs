export function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export function sortTest(fn, arr=[6,5,4,4,-3,12,0]) {
    arr = fn(arr)
    console.log(arr);
}
