const str1 = 'abcsamedef'
const str2 = 'uvwxysameza'
const str3 = 'zxcvbnmuvwxysamezaqwertyu'

const printDpAndSameStrInfo = (dp, sameStrInfo) => {
    console.log('dp: ', dp)
    console.log('sameStrInfo: ', sameStrInfo)
}

const findSameStr = (str1, str2) => {
    const dp = new Array(str1.length).fill(0).map(_ => new Array(str2.length).fill(0))
    const sameStrInfo = {
        maxLength: 0,
        str1SameStrEndIndex: 0,
        str2SameStrEndIndex: 0
    }

    for (let i = 0; i < str1.length; i += 1) {
        for (let r = 0; r < str2.length; r += 1) {
            if (str1[i] === str2[r]) {
                // 防溢出
                if (i > 0 && r > 0) {
                    dp[i][r] = dp[i - 1][r - 1] + 1
                    if (dp[i][r] > sameStrInfo.maxLength) {
                        sameStrInfo.maxLength = dp[i][r]
                        sameStrInfo.str1SameStrEndIndex = i
                        sameStrInfo.str2SameStrEndIndex = r
                    }
                } else {
                    dp[i][r] = 1
                }
            }
        }
    }

    printDpAndSameStrInfo(dp, sameStrInfo) // This line just print

    return str1.substr(sameStrInfo.str1SameStrEndIndex - (sameStrInfo.maxLength - 1), sameStrInfo.maxLength)
}

// dp：
//     [
//          u  v  w  x  y  s  a  m  e  z  a
//     a  [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
//     b  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     c  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     s  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
//     a  [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1 ],
//     m  [ 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ],
//     e  [ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0 ],
//     d  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     e  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//     f  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
//     ]
// sameStrInfo：{ maxLength: 4, str1SameStrEndIndex: 6, str2SameStrEndIndex: 8 }
// sameStr：same
console.log('sameStr: ', findSameStr(str1, str2))

// dp：...
// sameStrInfo:  { maxLength: 4, str1SameStrEndIndex: 6, str2SameStrEndIndex: 15 }
// sameStr:  same
console.log('sameStr: ', findSameStr(str1, str3))

// dp：...
// sameStrInfo:  { maxLength: 11, str1SameStrEndIndex: 10, str2SameStrEndIndex: 17 }
// sameStr:  uvwxysameza
console.log('sameStr: ', findSameStr(str2, str3))