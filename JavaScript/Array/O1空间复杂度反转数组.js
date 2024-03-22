const arr = [1, 2, 3, 4, 5]
const reArr = (arr) => {
    const len = arr.length
    const times = len / 2
    for (let i = 0; i < times; i += 1) {
        const val = arr[len - (len - i)]
        arr[len - (len - i)] = arr[len - i - 1]
        arr[len - i - 1] = val
        // 以上三行可以用下面一行解构代替
        // [arr[len - (len - i)], arr[len - i - 1]] = [arr[len - i - 1], arr[len - (len - i)]]
    }
    return arr
}

console.log(reArr(arr))
