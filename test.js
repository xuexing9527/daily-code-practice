const { addListener } = require("process")

// const arr = ["flower", "flow", "flight"] // fl
// const arr = ["ower", "aboc", "deof"] // o
// const arr = ["d", "d", "d"] // d
const arr = ["flower", "eeeeeflow", "wwwwwwfloight"] // flo

// 最长公共子字符串
const fn = (arr) => {

    // 是否都有某字符串
    const allHasStr = (str) => {
        if (!str) return false
        let allHas = true
        arr.forEach(item => {
            if (item.indexOf(str) === -1) {
                allHas = false
            }
        })
        return allHas
    }
    
    // 找出数组中最短的一个字符串
    const minLengthStr = (arr) => {
        let minLengStr = arr[0]
        arr.slice(0).forEach(item => {
            if (item.length < minLengStr.length) minLengStr = item
        })
        return minLengStr
    }

    const minStr = minLengthStr(arr)
    // 双向指针
    let i = 0, r = minStr.length
    // 最短字符串 正向切割初始值 
    let str = minStr
    // 最短字符串 反向切隔初始值
    let strReserve = str.slice(1, r)

    while (str.length > 0 || strReserve.length > 0) {
        if (allHasStr(str)) {
            return str
        } 
        if (allHasStr(strReserve)) {
            return strReserve
        }
        if (str.length > 1) {
            r -= 1
            str = str.slice(0, r)
            i += 1
            strReserve = strReserve.slice(i)
        }
    }

    return '没有相同字符串'
}

console.log(fn(arr))