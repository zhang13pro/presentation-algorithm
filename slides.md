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

# Zhang13pro

<div class="my-10 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/zhang13pro" target="_blank">zhang13pro</a></div>
  <ri-user-3-line class="opacity-50"/>
  <div><a href="https://13press.vercel.app" target="_blank">13press.vercel.app</a></div>
</div>

<img src='https://avatars.githubusercontent.com/u/28641249' class='rounded-full w-40 abs-tr mt-18 mr-14' />

---

# Before...

- 不要忽视<strong>基本</strong>算法
- 考虑极端(<em>边界</em>)条件
- 正确本身是相对概念
- 解决问题比没有解决强
- 接着怎么<strong>优化</strong>
- 思考给到的*提示*

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

---

# LeetCode-283

[# move-zeroes](https://leetcode-cn.com/problems/move-zeroes/)

<div class="grid grid-cols-2 gap-x-4 gap-y-2">

<v-clicks>

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
// two-pointer with no additional array
function moveZeroes(arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++) if (arr[i]) arr[k++] = arr[i];

  for (let i = k; i < arr.length; i++) arr[i] = 0;
}
```

```js
// two-pointer with no additional array
function moveZeroes(arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i])
      if (i !== k) swap(arr, k++, i);
      else k++;
}
```

<!-- [0,1,0,3,12] -->

<p class="pt-12 pl-4">在数组中使用双指针是很常用的技巧</p>

</v-clicks>

</div>

---

# Practice

<div class="grid grid-cols-2 gap-x-4 gap-y-2">

  <div v-click>

LeetCode-27

[# remove-element](https://leetcode-cn.com/problems/remove-element/)

<!-- 要求不使用额外<em>空间</em> -->

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
  </div>

  <div v-click>
 LeetCode-26

[# remove-duplicates-from-sorted-array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

<!-- 要求不使用额外<em>空间</em> -->

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

  </div>

</div>

---

# Practice

<div class="grid grid-cols-2 gap-4">
  <div v-click="1">

LeetCode-80

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

  </div>
  <div v-click="2" class="text-xl p-2">

    双指针无所不在🤨

  </div>

</div>

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

<div class="grid grid-cols-2 gap-x-4">
  <v-clicks>

```js
// 使用基本排序 你当然可以使用 sort API
function bubbleSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++)
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
}
```

```js
function selectionSort(arr) {
  let len = arr.length,
    minIndex;

  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) if (arr[j] < arr[minIndex]) minIndex = j;
    swap(arr, minIndex, i);
  }
}
```

<!-- function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1
  while (l < r) {
    let mid = l + (r - l) / 2 // 防止数值溢出
    if (arr[mid] === target) return mid
    if (arr[mid] < target) l = mid + 1
    else r = mid;
  }

  return -1
} -->

```js
function quickSort() {}
```

```js
function quickSort(arr) {
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
