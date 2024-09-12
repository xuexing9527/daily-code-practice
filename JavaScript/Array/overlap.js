const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [14, 5, 16, 7, 8, 19]

const overLap = (arr1, arr2) => {
    // 把小数组放前边
    (arr1.length > arr2.length) && ([arr1, arr2] = [arr2, arr1])
    const longerSet = new Set(arr2)
    return new Array(...new Set(arr1)).filter(item => longerSet.has(item))
}

console.log(overLap(arr1, arr2))
console.log(overLap(arr2, arr1))

