// 给定字符串，找出该字符串中出现次数最多的字符，并返回它的次数
const str = 'abcacdgs'

function findMost (str) {
    const len = str.length
    const obj = {}
    if (len) {
        // obj key 去存 返回
        for (let i = 0; i < len; i += 1) {
            obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1
        }
    }
    console.log(obj)
    let max = 0
    let maxStr = []
    for (let k in obj) {
        if (obj[k] > max) {
            max = obj[k]
            maxStr = k
        }
    }

    const arr = []
    for (let k in obj) {
        if (obj[k] == max) {
            arr.push(k)
        }
    }

    console.log('maxStr: ', maxStr)
    console.log('maxStr次数: ', max)
    console.log('maxStrArray: ', arr)
    return maxStr
    
} 

findMost(str)