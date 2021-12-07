// T O(logn) S O(1)
function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let mid = l + (r - l) / 2; // 防止数值溢出bug
    if (arr[mid] === target) return mid;

    if (arr[mid] < target) l = mid + 1;
    else r = mid;
  }

  return -1;
}

let index = binarySearch([1, 3, 4, 5, 8], 3);
console.log(index);
