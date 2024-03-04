const str = 'ababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejz';

const arr = []

// 暴力解法：时间复杂度 O(n^3)
// 回文字符串：从左向右读和从右向左读是一样的字符串
const findPalindromeString = (str) => {
    // 从第一个字符往后，比较每一个字符串
    // a 下一个字符是 any ，比较 a + any ?== any + a
        // 如果是 是一个回文字符串
        // 如果不是，继续 a + any + any，比较 a + any + any ?== any + any + any 
            // ...一直累加到字符串的末尾，然后从b开始

    // 比较是否为回文字符串
    const isPalindromeString = (str) => {
        if (str.length === 1) return false
        const len = str.length
        let invertString = ''
        for (let i = len - 1; i > -1; i -= 1) {
            invertString += str[i]
        }
        return (str === invertString)
    }

    const len = str.length

    for (let r = 0; r < str.length; r += 1) {
        let s = str[r]
        for (let i = r + 1; i < len; i += 1) {
            s += str[i]
            if (s.length > 1) {
                if (isPalindromeString(s)) arr.push(s)
            }
        }
    }

    return arr
}

// 所有 回文字符串
findPalindromeString(str)
// 输出结果: [ 'aba',    'bab',    'fddf', 'dd',     'crffrc', 'rffr', 'ff',     'jij',    'jijkkjij', 'ijkkji', 'jkkj',   'kk', 'jij',    'iji',    'mnasanm', 'nasan',  'asa',    'zjekejz', 'jekej',  'eke' ]
console.log(arr)

const findLongestStr = () => {
    let maxLength = 0
    arr.forEach((item) => {
        if (item.length > maxLength) {
            maxLength = item.length
        }
    })
    return arr.filter(item => (item.length === maxLength))
}

// 最长 回文字符串
// 输出结果：[ 'jijkkjij' ] 
console.log(findLongestStr(arr))
