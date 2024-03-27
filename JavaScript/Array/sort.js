const arr = [2, 4, 5, 1, 2, 3, 4, 0, 8, 9, 6, 5]

const quickSort = (arr) => {
    // recursion: peel onions -（递归：剥洋葱）
    if (arr.length < 2) return arr
    const pivot = arr[0]
    arr.forEach((item, index) => {
        if (item < pivot) {
            // Splice to change array
            arr.splice(index, 1)
            arr.unshift(item)
        }
    })
    // Splice to change array
    const leftArr = arr.splice(0, arr.indexOf(pivot) + 1)
    const rightArr = arr
    return quickSort(leftArr).concat(quickSort(rightArr))
}

console.log('quickSort: ', quickSort(arr))



// ------------------------ -----------------------------------
// Quick sort 生撸 失败版 ...
let targetArr = []
const quickSort_FAIL = (arr, baseNum) => {
    if (!arr.length || arr.length === 1) {
        targetArr = targetArr.concat(arr)
        console.log('quickSort_FAIL targetArr', targetArr)
        return
    }

    // 分割排序
    arr.forEach((item, i) => {
        if (item < baseNum) {
            arr.splice(i, 1)
            arr.unshift(item)
        }
    })
    const arrFront = arr.slice(0, arr.indexOf(baseNum) + 1)
    const arrEnd = arr.slice(arr.indexOf(baseNum) + 1)

    // 完成谁先 谁后？
    quickSort(arrEnd, arrEnd[0])
    // 完成谁先 谁后？
    quickSort(arrFront, arrFront[0])
}

quickSort_FAIL(arr, arr[0])
// ------------------------ -----------------------------------