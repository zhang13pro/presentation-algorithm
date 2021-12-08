function moveZeroes(arr) {
  let newArr = [];

  for (const it of arr) if (it) newArr.push(it);
  for (let i = newArr.length; i < arr.length; i++) newArr.push(0);

  return newArr;
}

let arr = moveZeroes([0, 1, 0, 3, 12]);
console.log(arr);
