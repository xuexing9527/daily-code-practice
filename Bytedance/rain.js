// 有一组不同高度的台阶，由一个整数数组表示，数组中每个数是台阶的高度。
// 当开始下雨了（水足够多），台阶之间的水坑会积多少水呢？
// 如下图，可以表示为数组[0,1,0,2,1,0,1,3,2,1,2,1]，返回积水量6。

//         0
//     0_ _00_0
//  _0_00_000000 

// 列二维数组:
//     行：数组中的 最大值
//     列：数组 length
// 
// 思考1：每一行左右第一个非空值包含的空值，每一行相加，为答案
// 
// 思考2：错误思路 pass，错在 不该 + 列高
//      1. 第一行，为'_'的台阶积累雨滴，去掉首尾 + 列高
//      2. 第二行，第二行 - 第一行 为 '0'，去掉首尾 + 列高 - 1
//      3. 第三行，第三行 - 第二行 为 '0'，去掉首尾 + 列高 - 1
// 
// 思考3: 在思考1的基础上思考
//      整理首尾：
//          截取数组 前后 第一个 大于0 的值
//      打印数组
//          1. 第一行，整理首尾，积累雨滴(为 0 或 < 0 的位置)
//          2. 第二行，集体 - i，整理首尾，积累雨滴(为 0 或 < 0 的位置)
//          ...


// 参考思考3实现，耗时 1h
function getRain(arr) {
    const time = new Date().getTime()
    const column = arr.length
    const row = arr.slice().sort()[column - 1]
    let rain = 0

    const handleArr = (arr) => {
        // 声明变量
        const obj = { firstIndex: undefined, lastIndex: undefined }
        // 记录最后第一个不为 0 的值，到数组长度之间的距离
        let r = 0
        arr.map((item, index) => {
            // 出现大于 0 的值，r = 0
            if (item > 0) {
                r = 0
                if (obj.firstIndex === undefined) {
                    obj.firstIndex = index
                }
            } else {
                // 出现 0 值就 + 1
                r += 1
            }
        })

        obj.lastIndex = arr.length - r
        const payloadArr = arr.slice(obj.firstIndex, obj.lastIndex)
        return payloadArr
    }

    // 每一次进入循环，数组要经过 去首尾 0， - i，再去 找首尾 0
    for (let i = 0; i < row; i += 1) {
        let tArr = []
        // 找首尾 0
        tArr = handleArr(arr)
        // - i
        if (i !== 0) {
            tArr = tArr.map(item => item - i)
            // 找首尾 0 
            tArr = handleArr(tArr)
        }
        // console.log('tArr', tArr)

        tArr.forEach((item) => {
            // 积累为 0 的雨滴
            if (item <= 0) {
                rain += 1
            }
        })
    }
    console.log('getRain耗时：', new Date().getTime() - time)
    return rain
}

// 思考4: 
//      一边找首尾的不为0的值，一边计算雨滴，简化下代码
//         0
//     0_ _00_0
//  _0_00_000000 
// 

function getRain2(arr) {
    const time = new Date().getTime()
    const lines = arr.slice().sort()[arr.length - 1]
    const len = arr.length
    let rains = 0

    for (let i = 0; i < lines; i += 1) {
        const obj = { firstItem: undefined, lastItem: undefined }
        // 获取首尾
        for (let m = 0, n = len - 1; m <= n; m += 1, n -= 1) {
            if (arr[m] - i >= 1 && obj.firstItem === undefined) obj.firstItem = m
            if (arr[n] - i >= 1 && obj.lastItem === undefined) obj.lastItem = n
        }
        // 同时存在
        if (obj.firstItem && obj.lastItem) {
            // Remember item - 1
            arr.slice(obj.firstItem, obj.lastItem + 1).map(item => item - i)
                // 开始积累雨滴
                .forEach(item => { if (item <= 0) rains += 1 })
        }
    }
    console.log('getRain2耗时：', new Date().getTime() - time)
    return rains
}

// 思考5: 
//      分层积累，保留上一次计算结果，
//      从开头找成立的点后，开始积累雨滴。如果当前层最终尾结点成立，则积累当前层雨滴，否则，舍弃当前层雨滴
// 
//         0
//     0_ _00_0
//  _0_00_000000 
// 

function getRain3(arr) {
    const time = new Date().getTime()
    // 由积累成功后的层级计算出下一层需要 遍历的 前后位置，存入数组 为了 和 i 建立关联关系
    const levelStartAndEnd = [
        { firstIndex: 0, lastIndex: arr.length } // 第一层 默认从头到尾遍历
    ]
    let i = 0
    let rains = 0
    while (true) {
        let levelRains = 0
        const obj = { firstIndex: undefined, lastIndex: undefined }
        const preLevelObj = levelStartAndEnd[i]
        if (preLevelObj) {
            // 这里注意，奇数长度数组中间值 不会被遍历到。放到后面 m, n 存在的情况下，再判断中间值是否积累雨滴
            for (let m = preLevelObj.firstIndex, n = preLevelObj.lastIndex; m < n; m += 1, n -= 1) {
                if (arr[m] - i >= 1 && obj.firstIndex === undefined) { obj.firstIndex = m } // 从 m 位置开始积累雨滴
                if (obj.firstIndex !== undefined && (m > obj.firstIndex && arr[m] - i <= 0)) { levelRains += 1 } // obj.firstIndex 存在时，arr[m] - i 小于等于 0 且 大于 m 位置时 积累雨滴
                if (arr[n] - i >= 1 && obj.lastIndex === undefined) { obj.lastIndex = n } // 到 n 位置 结束积累雨滴，循环结束后，考虑 n 是否真的存在，如果不存在，当前层没有雨滴可接
                if (obj.lastIndex !== undefined && (n < obj.lastIndex && arr[n] - i <= 0)) { levelRains += 1 } // obj.firstIndex 存在时，arr[m] - i 小于等于 0 且 大于 m 位置时 积累雨滴
            }

            // 如果 m, n 相遇，没有合适的 m 或 n，舍弃当前层的雨滴。只有当 m, n 都存在时，levelRains 才成立
            if (obj.firstIndex !== undefined && obj.lastIndex !== undefined) {
                levelStartAndEnd.push(obj) // 存入层级 obj，减少下次遍历的长度
                const len = preLevelObj.lastIndex + 1 - obj.firstIndex
                // 如果数组长度是奇数，判断中间节点是否满足接雨滴的条件
                if (len % 2 !== 0) {
                    const middleIndex = (preLevelObj.firstIndex + preLevelObj.lastIndex) / 2
                    if (arr[middleIndex] - i <= 0) rains += 1
                }
                rains = rains + levelRains // 积累当前层雨滴
            }
        } else {
            // 上一次都没积累雨滴，直接break
            break;
        }
        i += 1
    }
    console.log('getRain3耗时：', new Date().getTime() - time)
    return rains
}



// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 0, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 2, 1] // 8 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 0, 1, 2, 1] // 8 滴
const arr = [10000 ,0 ,999 , 10000] // 7 滴
// const arr = new Array(1000000).fill(0).map(item => parseInt(Math.random() * 10)) // n 滴

console.log('getRains3 收集雨滴数：', getRain3(arr))
console.log('getRains2 收集雨滴数：', getRain2(arr))
console.log('getRains 收集雨滴数：', getRain(arr))

// 总结：
//  getRain2 和 getRain 是一样的思路，只是代码 getRain2 更清爽一些
//  getRain3 优化掉 操作 arr 这部分时间复杂度 的环节