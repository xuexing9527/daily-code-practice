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

// 思考：
// 问题一：见代码第五行, 是否能优化掉空数组 [] ，或者数组 length 为 1 的时候，进来的这一步？
// 问题二：targetItem 的选取是否有优化可能？
// 问题三：快排最差，最优时间复杂度分析？