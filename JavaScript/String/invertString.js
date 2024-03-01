// 反转字符串
const str = 'abcdefghijklmn'

const len = str.length - 1
let s = ''
for (let i = len; i >-1; i -= 1) {
    s += str[i]
}

console.log(s)