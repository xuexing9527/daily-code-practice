// Quick sort 生撸 失败版 ...
const arr = [2, 4, 5, 1, 2, 3, 4, 0, 8, 9, 6, 5]

let targetArr = []
const quickSort = (arr, baseNum) => {
    if (!arr.length || arr.length === 1) {
        // console.log('finally', arr)
        targetArr = targetArr.concat(arr)
        console.log('targetArr', targetArr)
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

quickSort(arr, arr[0])