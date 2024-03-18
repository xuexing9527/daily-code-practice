// How to new an Array easily ?
const n = 10
const arr = new Array(n)

// [ <10 empty items> ]
console.log(arr)

// nothing logs
arr.forEach((_, i) => { console.log(i) })
// nothing logs
arr.map((_, i) => { console.log(i) })
// nothing logs
arr.filter((_, i) => { console.log(i) })
arr.reduce((current, pre, ) => { console.log(i) })

// logs: n
console.log(arr.length)
// logs: undefined
console.log(arr[0])

const makeUndefinedItemArray = (n) => {
    return new Array(n).fill(undefined)
}
const arr2 = makeUndefinedItemArray(n)

// logs: [ undefined, ..., undefined ] // n 个 undefined
console.log(arr2)
// logs: 0, 1, ..., n 
// Also, map, filter, ... can be iterative.
arr2.forEach((_, i) => console.log(i))

// new Array(n) vs new Array(n).fill(undefined)
// [ <n empty items> ] vs [ undefined, ..., undefined, ] 
// n 个 empty items vs n 个 undefined 组成 的数组
