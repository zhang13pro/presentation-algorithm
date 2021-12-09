import { swap } from './utils.mjs'
import { sortTest } from './utils.mjs'

function selectionSort(arr) {
    const len = arr.length
    let minIndex 

    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i+1; j < len; j++) 
            if (arr[j] < arr[minIndex]) 
                minIndex = j
        swap(arr, minIndex, i)
    }

    return arr
}

sortTest(selectionSort)