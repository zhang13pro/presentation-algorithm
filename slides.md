---
layout: cover
highlighter: shiki
monaco: true
---

# Algorithm with JavaScript

<div class="uppercase text-sm tracking-widest">
zhang13pro
</div>

<div class="abs-bl mx-14 my-12 flex">
  <img src="https://static.leetcode-cn.com/cn-mono-assets/production/assets/logo-dark-cn.c42314a8.svg" class="h-8">
  <div class="ml-3 flex flex-col text-left">
    <div><b>LeetCode</b></div>
    <div class="text-sm underline opacity-50">Dec. 07th, 2021</div>
  </div>
</div>
---

## layout: 'intro'

# Zhang13pro

<div class="my-10 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/zhang13pro" target="_blank">zhang13pro</a></div>
  <ri-user-3-line class="opacity-50"/>
  <div><a href="https://www.xunlu.xyz" target="_blank">xunlu.xyz</a></div>
</div>

<img src='https://avatars.githubusercontent.com/u/28641249' class='rounded-full w-40 abs-tr mt-18 mr-14' />

---

name: Sponsors
layout: center

---

# Before...

- 不要忽视<strong>基本</strong>算法
- 考虑极端(<em>边界</em>)条件
- 正确本身是相对概念
- 解决问题比没有解决强
- 考虑怎样<strong>优化</strong>

 <!-- 正确本身是相对概念，空间换时间、预处理信息（排序）、瓶颈处寻找答案 -->

---

# Array

<style>
  h1{
   text-align:center;
   padding-top:25%
  }
</style>

---

# LeetCode-1

[# two-sum](https://leetcode-cn.com/problems/two-sum/)

<div class="grid grid-cols-2 gap-x-4">

```js
//As you see, a solution is better than no solution
function twoSum(arr, target) {
  const len = arr.length;

  for (let i = 0; i < len; i++)
    for (let j = i + 1; j < len; j++)
      if (arr[i] + arr[j] === target) return [i, j];
}
```

<v-clicks>

```js
function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++)
    if (map.get(target - arr[i]) === undefined) map.set(arr[i], i);
    else return [i, map.get(target - arr[i])];
}
```

<p class="pt-12">空间换时间、预处理信息（排序）、瓶颈处寻找答案</p>

</v-clicks>
</div>

<!-- # 冒泡

```js
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
``` -->

<!-- # 二分查找

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
``` -->

<!--  T O(logn) S O(1) -->

---

# LeetCode-283

[# move-zeroes](https://leetcode-cn.com/problems/move-zeroes/)

<div class="grid grid-cols-2 gap-x-4">

```js
// using an additional array
function moveZeroes(arr) {
  let newArr = [];

  for (const it of arr) if (it) newArr.push(it);
  for (let i = newArr.length; i < arr.length; i++) newArr.push(0);

  return newArr;
}
```

```js
// two-pointer
function moveZeroes(arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++)

}
```

<!-- [2,0,3,3,1] -->

</div>

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

<!-- <Progress :count=5></Progress> -->

[# sort-colors](https://leetcode-cn.com/problems/sort-colors/)

<div class="grid grid-cols-2 gap-4">
<v-clicks>

```js
function sortColors(arr) {
  arr.sort((a, b) => a - b);
}
```

```js
function sortColors(arr) {
  arr.sort((a, b) => a - b);
}
```

```js
function sortColors(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++)
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
}
```

</v-clicks>

<v-clicks>

```js
function sortColors(arr) {
  arr.sort((a, b) => a - b);
}
```

```js
function sortColors(arr) {
  arr.sort((a, b) => a - b);
}
```

</v-clicks>

</div>

<!--
1 库排序函数
2 自己实现排序 冒泡O(n^2)
   i
   j
  [6,5,4,3,2,1]
3 优化 快排
-->

---

# LeetCode-88

[# merge-sorted-array](https://leetcode-cn.com/problems/merge-sorted-array/)

<div class="grid grid-cols-2 gap-4">
<v-clicks>

```js
function merge(nums1, m, nums2, n) {
  for (let i = m, j = 0; i < m + n; i++) if (j < n) nums1[i] = nums2[j++];
  nums1.sort((a, b) => a - b);
}
```

</v-clicks>
</div>

---

# You are Welcome~

Slides can be found on [xxx](void:0)
