// const arr = [5, 4, 54, 678, 687, 2678]
const arr = new Array(5000000).fill(0).map(_ => parseInt(Math.random() * 30))

const getMaxAndMin = (arr) => {
    const time = new Date().getTime()
    arr.sort((a, b) => (a - b))
    const max = arr[arr.length - 1]
    const min = arr[0]
    console.log('getMaxAndMin 执行时间 ms:', new Date().getTime() - time)
    return { max, min }
}

const getMaxAndMin2 = (arr) => {
    const time = new Date().getTime()
    let max = arr[0] 
    let min = arr[0] 
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] >= max) max = arr[i]
        if (arr[i] <= min) min = arr[i]
    }
    console.log('getMaxAndMin2 执行时间 ms:', new Date().getTime() - time)
    return { max, min }
}

const getMaxAndMin3 = (arr) => {
    const time = new Date().getTime()
    let max = arr[0]
    let min = arr[0]
    for (let i = 0, j = arr.length; i <= j; i += 1, j -= 1) {
        const [timeMax, timeMin] = arr[i] > arr[j] ? [arr[i], arr[j]] : [arr[j], arr[i]]
        max = timeMax > max ? timeMax : max
        min = timeMin < min ? timeMin : min
    }
    console.log('getMaxAndMin3 执行时间 ms:', new Date().getTime() - time)
    return { max, min }
}

// 间复杂度O(n)，双指针虽然降低了循环次数，但是增加了条件语句，反而比 常规的 getMaxAndMin2 方法 慢
console.log(getMaxAndMin3(arr))
// 间复杂度O(n)
console.log(getMaxAndMin2(arr))
// 这个方法的时间复杂度，等同于排序算法的时间复杂度：是 O(nlog(n))
console.log(getMaxAndMin(arr))
