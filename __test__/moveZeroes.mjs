import { swap } from "./utils.mjs";
import { sortTest } from "./utils.mjs";

function moveZeroes(arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++) 
    if (arr[i]) 
      if(i!==k) swap(arr, k++, i)
      else k++
}

sortTest(moveZeroes);
