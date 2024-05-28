// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

 

// 示例 1:

// 输入: s = "abab"
// 输出: true
// 解释: 可由子串 "ab" 重复两次构成。
// 示例 2:

// 输入: s = "aba"
// 输出: false
// 示例 3:

// 输入: s = "abcabcabcabc"
// 输出: true
// 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 

// 提示：

// 1 <= s.length <= 104
// s 由小写英文字母组成

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    if (s.length === 1) return false
    let str = ''
    let subStr = ''
    let i = 1
    let isTrue = false
    while (i <= s.length / 2 + 1) {
        subStr = s.slice(0, i)
        if (s.length % i === 0 && subStr !== s) {
            for (let r = 0; r < s.length / i; r += 1) {
                str += subStr
            }
            if (str === s) {
                isTrue = true
                break;
            }
        }
        str = ''
        i += 1
    }
    return isTrue
};

console.log(repeatedSubstringPattern("abcabc")) // true
console.log(repeatedSubstringPattern("a")) // false
console.log(repeatedSubstringPattern("ab")) // false
console.log(repeatedSubstringPattern("abcabcabcabc")) // true