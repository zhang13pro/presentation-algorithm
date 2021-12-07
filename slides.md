---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
highlighter: shiki
lineNumbers: true
monaco: true
# persist drawings in exports and build
drawings:
  persist: false
---

# Algorithm with JS

[@zhang13pro](https://github.com/zhang13pro)

---

# Before...

- 不要忽视<strong>基本</strong>算法
- 考虑极端(<em>边界</em>)条件
- 正确本身是相对概念
- 解决问题比没有解决强
- 考虑怎样<strong>优化</strong>

 <!-- 正确本身是相对概念，空间换时间、预处理信息（排序）、瓶颈处寻找答案 -->

---

# 数组

<style>
  h1{
   text-align:center;
   padding-top:25%
  }
</style>

---

# 二分查找

```js
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
```

<!--  T O(logn) S O(1) -->

---

# LeetCode-283

[# move-zeroes](https://leetcode-cn.com/problems/move-zeroes/)

```js
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
```

```js
var moveZeroes = function (arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i])
      if (i !== k) swap(arr, i, k++);
      else k++;
};
```

<!--
  swap函数方便复用，还必须得传入数组参数
  T O(logn) S O(1)
-->

---

# LeetCode-27

[# remove-element](https://leetcode-cn.com/problems/remove-element/)

要求不使用额外<em>空间</em>

```js
function removeElement(arr, target) {
  let count = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++)
    if (arr[i] === target) continue;
    else arr[count++] = arr[i];

  return count;
}
```

 <!--
  [1,2,2,4] 2
  T:O(n) S:O(1) 双指针
  -->

---

# LeetCode-26

[# remove-duplicates-from-sorted-array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

要求不使用额外<em>空间</em>

```js
function removeDuplicates(arr) {
  const len = arr.length;
  let count = 1;

  if (len < 2) return len;
  for (let i = 1; i < len; i++)
    if (arr[i] === arr[count - 1]) continue;
    else arr[count++] = arr[i];

  return count;
}
```

 <!-- T:O(n) S:O(1) 双指针 -->

---

# LeetCode-80

[# remove-duplicates-from-sorted-array-ii](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

```js
function removeDuplicates(arr) {
  const len = arr.length;
  let count = 2;

  if (len < 3) return len;
  for (let i = 2; i < len; i++)
    if (arr[i] === arr[count - 2]) continue;
    else arr[count++] = arr[i];

  return count;
}
```

<!--
      c c c
      i i i i
 [1,1,1,2,2,3]
  双指针
  T:O(n) S:O(1)
 -->

---

# LeetCode-75

[# sort-colors](https://leetcode-cn.com/problems/sort-colors/)

```js {monaco}
// function sortColors(arr) {
//   arr.sort((a, b) => a - b);
// }

// function sortColors(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++)
//     for (let j = 0; j < len - 1 - i; j++)
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
// }
```

<!--
1 库排序函数
2 自己实现排序 冒泡O(n^2)
   i
   j
  [6,5,4,3,2,1]
3 优化 快排
-->

---

![基本排序算法](/sort.png)

<!-- <style>
  img{
   height:100%;
  }
</style> -->
