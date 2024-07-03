const arr = ["flower", "flow", "flight"]

// 最长公共子序列
const fn = (arr) => {
    // 找出数组中最短的一个字符串
    const minLengthStr = arr.sort()[0]

    let str = minLengthStr

    const allHasStr = (str) => {
        console.log(str)
        let allHas = true
        arr.forEach(item => {
            if (item.indexOf(str) === -1) {
                allHas = false
            }
        })
        return allHas
    }

    if (str.length === 1 && allHasStr(str)) return str
    
    let strReserve = str

    // 正向 反向
    let i = 0, r = str.length
    while (str.length > 1 || strReserve > 1) {
        if (allHasStr(str)) {
            return str
        } else if (allHasStr(strReserve)) {
            return strReserve
        } else {
           // 两个字符串
           str = str.slice(0, r)
           r -= 1
           strReserve = str.slice(i)
           i += 1
       }
    }

    return ''
}

console.log(fn(arr))