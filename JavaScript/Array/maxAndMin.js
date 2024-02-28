const arr = [5, 4, 54, 678, 687, 2678]

const getMaxAndMin = (arr) => {
    arr.sort((a, b) => (a - b))
    const max = arr[arr.length - 1]
    const min = arr[0]
    return { max, min }
}

// 这个方法的时间复杂度，等同于排序算法的时间复杂度：是 O(nlog(n))
console.log(getMaxAndMin(arr))