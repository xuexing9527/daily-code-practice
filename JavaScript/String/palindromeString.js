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

// 动态规划
const findPalindromeStringUseDP = (str) => {
    const arr = []
    const time = new Date().getTime()
    // 二维数组去储存拼接可能的字符串
    const len = str.length
    const dp = new Array(len).fill(new Array(len).fill(false))
    // false 代表是否为回文字符串，默认false
    //      a       b       a       d
    //    [
    // a    [false, false, false, false],
    // b    [false, false, false, false],
    // a    [false, false, false, false],
    // d    [false, false, false, false]
    //     ]

    // 示例：
    //          a   b    a     d
    //    [
    // a    [   a, ab, aba, abad],
    // b    [  ba,  b,  ba,  bad],
    // a    [ aba, ba,   a,   ad],
    // d    [abad, bad, ad,    d]
    //     ]
    // 我们定义数组为dp, i 为横坐标，j 为纵坐标
    // 观察示例：符合回文字符串特征 dp[i, i] 或 dp[j, j]为单字母，即对角线处的单字母：a, b, a, d
    // 从对角线字母出发，首尾各增加相同的字母，即为回文字符串：对应对角线的 右上左下 位置，如:
    // aba, 为 对角线字母 b 的右上左下
    // bad, 为 对角线字母 a (第三行列交汇处)的右上左下
    // 我们只需定义出这个规则，即可完成回文字符串的查找工作，即：
    //     首尾字母想等：str[i] === str[j]
    //     str中，i 和 j 位置，只差 1， j - i === 1
    //     且：右上 dp[i + 1][j - 1]

    // 对角线处单字母为 true
    for (let i = 0; i < len - 1; i += 1) {
        dp[i][i] = true
    }

    for (let i = 0; i < len -1 ; i += 1) {
        for (let j = 0; j < len - 1; j += 1) {
            if ((str[i] === str[j]) && (j - i === 1 || dp[i + 1], [j - 1])) {
                dp[i][j] = true
                const targetStr = str.substr(i, j)
                arr.push(targetStr)
            }
        }
    }

    const runTime = new Date().getTime() - time
    console.log(`dp方法，O(n^2)找到所有回文字符串的时间为： ${runTime} ms`)
    console.log(arr)
    console.log(dp)
}

findPalindromeStringUseDP(str)