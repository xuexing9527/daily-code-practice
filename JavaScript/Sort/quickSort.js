// Quick sort
const arr = [10, 6, 1, 9, 7, 3, 8, 8, 13, 3, 2]

const quickSort = (arr) => {
    // 是否能优化掉空数组 [] ，或者数组 length 为 1 的时候，进来的这一步呢？
    if (arr.length <= 1) return arr
    if (arr.length > 1) {
        const targetItem = arr[0]
        const frontPartArr = []
        const endPartArr = []

        // 这里记得 截取掉 目标值，否则会导致死循环
        arr.slice(1).forEach((item) => {
            if (item < targetItem) {
                frontPartArr.push(item)
            } else {
                endPartArr.push(item)
            }
        })

        return quickSort(frontPartArr).concat(targetItem).concat(quickSort(endPartArr))
    }
}

console.log(quickSort(arr))
// quickSort(arr)
// 平均时间复杂度：O(log(n))


// 去掉辅助数组的空间复杂度
const QuickSortSpaticalComplexity = (arr) => {
    if (arr.length < 2) return arr
    if (arr.length > 1) {
        const pivot = arr[0]
        arr.forEach((item, index) => {
            if (item < pivot) {
                arr.splice(index, 1)
                arr.unshift(item)
            }
        })
        const index = arr.indexOf(pivot)
        const frontArr = arr.splice(0, index)
        arr.splice(0, 1) // splice pivot
        return QuickSortSpaticalComplexity(frontArr).concat(pivot).concat(QuickSortSpaticalComplexity(arr)) 
    }
} 

console.log('sc', QuickSortSpaticalComplexity(arr))
// QuickSortSpaticalComplexity(arr)
// 平均时间复杂度为：O(log(n))


// 思考：
// 问题一：见代码第五行, 是否能优化掉空数组 [] ，或者数组 length 为 1 的时候，进来的这一步？
// 问题二：targetItem 的选取是否有优化可能？
// 问题三：快排最差，最优时间复杂度分析？