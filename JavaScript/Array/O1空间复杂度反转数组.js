const arr = [1, 2, 3, 4, 5]
const reArr = (arr) => {
    const len = arr.length
    const times = len / 2
    for (let i = 0; i < times; i += 1) {
        // 引用关系
        const val = arr[len - (len - i)]
        arr[len - (len - i)] = arr[len - i - 1]
        arr[len - i - 1] = val
    }
    console.log(arr)
    return arr
}
reArr(arr)
