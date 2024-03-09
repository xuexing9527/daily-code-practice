const str = 'ababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejz';
// const str = 'ababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejz';
// const str = 'ababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejzababcefddfcrffrcshncjijkkjijimnasanmbcxzjekejz';

// #### 方法一：暴力解法：时间复杂度 O(n^2 * m)，其中 m 为最长字符串的长度 = n
// 回文字符串：从左向右读和从右向左读是一样的字符串
const arr = []
const findPalindromeString = (str) => {
    const time = new Date().getTime()
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

    const runTime = new Date().getTime() - time
    console.log(`O(n^2 * m)找到所有回文字符串的时间为： ${runTime} ms`)
    return arr
}

// 所有 回文字符串
findPalindromeString(str)
console.log(arr)


/////// !!!!!!!!!!!! 写完了执行才发现，这是个错误的示例：时间复杂度仍然为 O(n^2 * m) !!!!!!!!!!
/////// !!!!!!!!!!!! 而且字符串太大的情况下，会消耗大量内存 !!!!!!!!!!
// #### 方法二：显然判断 回文字符串 的循环是可以省略的，可以降低时间复杂度到O(n^2)
// 如何省略：比如我们把字符串对应的 回文字符串 存在数组里，直接做全等比较，省去第三层循环
const findPalindromeStringUseArray = (str) => {
    const time = new Date().getTime()
    // 如果字符串为：abcd
    // 拼出 a + any 的数组 arr
    // arr: [ab, abc, abcd, bc, bcd, cd]
    // 拼出 any + 1 的数组 arrInvertString
    // arrInvertString: [ba, cba, dcba, cb, dcb, dc]
    // arr 与 arrInverString 要做逐一对比

    const len = str.length
    const arr = []
    for (let r = 0; r < str.length; r += 1) {
        let s = str[r]
        for (let i = r + 1; i < len; i += 1) {
            s += str[i]
            arr.push(s)
        }
    }

    // 此处的时间复杂度为 n^2 * m，此处时间复杂度未降低，反而多用了内存
    const arrInvertString = arr.map(item => {
        const len = item.length
        let str = ''
        for (i = len - 1; i > -1; i-= 1) {
            str += item[i]
        }
        return str
    })

    // n^2
    const targetArr = arr.filter((item, index) => {
        if (item === arrInvertString[index]) return item
    })

    const runTime = new Date().getTime() - time
    console.log(`O(n^2)找到所有回文字符串的时间为： ${runTime} ms`)
    // 所有回文字符串
    console.log(targetArr)
    return targetArr
}

findPalindromeStringUseArray(str)


// #### 找最长回文字符串，可能是多个
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
console.log(findLongestStr(arr))