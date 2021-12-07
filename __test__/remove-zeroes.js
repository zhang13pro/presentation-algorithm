function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// T O(n) S O(1)
var moveZeroes = function (arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i])
      if (i !== k) swap(arr, i, k++);
      else k++;
};

let arr = moveZeroes([2, 2, 0, 1, 3]);
console.log(arr);
