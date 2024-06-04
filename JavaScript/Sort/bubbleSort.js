// Bubble sort
const arr = [10, 6, 1, 9, 7, 3, 8, 8, 13, 3, 2]

const bubbleSort = (arr) => {
    // 取第一个元素为目标元素，一直往后比较，只要比目标元素大，就交换位置，依次往后遍历
    let r = arr.length
    while (r > 1) {
        let i = 0
        while (i < arr.length - 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
            i += 1
        }
        r -= 1
    }
    return arr
}

console.log(bubbleSort(arr))