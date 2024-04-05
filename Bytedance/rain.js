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
    const column = arr.length
    const row = arr.slice().sort()[column - 1]
    console.log('column & row:', column, row)
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
        console.log('tArr', tArr)

        tArr.map((item) => {
            // 积累为 0 的雨滴
            if (item <= 0) {
                rain += 1
            }
        })
    }
    console.log('rain', rain)
    return rain
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 0, 1] // 6 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 2, 1] // 8 滴
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 0, 1, 2, 1] // 8 滴
// const arr = [0, 1, 0, 2, 0, 0, 1, 3, 2, 1, 2, 1] // 7 滴

getRain(arr)





// 思考4: 待完成
//      数组中没个数 - 最大值
// 
// 
//         0
//     0_ _00_0
//  _0_00_000000 
//  3 2 3 1 2 3 2 0 1 2 1 2
// 
// 
// 
// 

