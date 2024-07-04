const { addListener } = require("process")

const arr = ["flower", "flow", "flight"]

// 最长公共子序列
const fn = (arr) => {

    const allHasStr = (str) => {
        let allHas = true
        arr.forEach(item => {
            if (item.indexOf(str) === -1) {
                allHas = false
            }
        })
        return allHas
    }
    
    // 找出数组中最短的一个字符串
    const minLengthStr = arr.sort()[0]

    // 正向 反向
    let str = minLengthStr
    let strReserve = minLengthStr 
    let i = 0, r = str.length

    if (str.length === 1 && allHasStr(str)) return str

    while (str.length > 1 || strReserve.length > 1) {
        console.log('str: ', str)
        console.log('strReserve: ', strReserve)
        if (allHasStr(str)) {
            return str
        } 
        if (allHasStr(strReserve)) {
            return strReserve
        }
        r -= 1
        // 两个字符串
        str = str.slice(0, r)
        i += 1
        strReserve = strReserve.slice(i)
    }

    return ''
}

console.log(fn(arr))



// http 缓存