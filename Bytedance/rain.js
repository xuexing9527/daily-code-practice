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
    // sort()方法默认转成字符串，进行 Unicode 排序
    const row = arr.slice().sort((a, b) => (a - b))[column - 1]
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
        // 判断 首尾是否真的存在
        if (obj.firstIndex !== undefined && obj.lastIndex !== undefined) {
            const payloadArr = arr.slice(obj.firstIndex, obj.lastIndex)
            return payloadArr
        }
        return []
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
    const lines = arr.slice().sort((a, b) => (a - b))[arr.length - 1]
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
        if (obj.firstItem !== undefined && obj.lastItem !== undefined) {
            // Remember item - 1
            arr.slice(obj.firstItem, obj.lastItem + 1).map(item => (item - i))
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
    let n = 0
    let rains = 0
    while (true) {
        const obj = { firstIndex: undefined, lastIndex: undefined }
        const preLevelObj = levelStartAndEnd[n]
        if (preLevelObj) {
            for (let i = 0; i < preLevelObj.lastIndex; i += 1) { if (arr[i] - n >= 1) { obj.firstIndex = i; break; } }  // 从 i 位置开始积累雨滴
            for (let j = preLevelObj.lastIndex; j > 0; j -= 1) { if (arr[j] - n >= 1) { obj.lastIndex = j; break; } } // 到 j 位置 结束积累雨滴

            // 积累雨滴
            if (obj.firstIndex < obj.lastIndex) {
                for (let i = obj.firstIndex; i < obj.lastIndex; i += 1) { if (arr[i] - n <= 0) rains += 1 }
                levelStartAndEnd.push(obj)
            }
        } else {
            break // 上一次都没积累雨滴，直接break
        }
        n += 1
    }
    console.log('getRain3耗时：', new Date().getTime() - time)
    return rains
}

// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 0, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 2, 1] // 8 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 0, 1, 2, 1] // 8 滴
// const arr = [10000, 0, 10000] // 10000 滴
// const arr = [10000, 0, 10000, 0, 1] // 10001 滴
// const arr = [10000, 0, 999, 0, 10000] // 29001 滴
const arr = new Array(1000000).fill(0).map(item => parseInt(Math.random() * 10)) // n 滴

console.log('getRains3 收集雨滴数：', getRain3(arr))
console.log('getRains2 收集雨滴数：', getRain2(arr))
console.log('getRains 收集雨滴数：', getRain(arr))

// 总结：
//  getRain2 和 getRain 是一样的思路，只是代码 getRain2 更清爽一些
//  getRain3 优化掉 操作 arr 这部分时间复杂度 的环节