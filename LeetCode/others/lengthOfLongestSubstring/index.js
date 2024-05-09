// URL: https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 
// 子串
//  的长度。

 

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0
    // 移动i，拼接长度
    let i = 0;
    let r = i + 1;
    let str = s[i];
    let maxLength = str.length;
    while (!((str.length > s.length - i - 1 ) || (i > s.length))) {
        if (str.indexOf(s[r]) === -1) {
            str += s[r]
            r += 1
            maxLength = str.length > maxLength ? str.length : maxLength
        } else {
            maxLength = str.length > maxLength ? str.length : maxLength
            i += 1
            r = i + 1
            str = s[i]
        }
    }
    return maxLength
};

const s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s)) // 3

const s1 = 'bbbbb'
console.log(lengthOfLongestSubstring(s1)) // 1

const s2 = 'pwwkew'
console.log(lengthOfLongestSubstring(s2)) // 3