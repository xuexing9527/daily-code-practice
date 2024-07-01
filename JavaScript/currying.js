const currying = (() => {
    let arr = []
    const fn = (...args) => {
        if (!args.length) {
            // 计算结果
            console.log(arr)
            return arr.reduce((pre, cur) => pre + cur, 0)
        }
        arr = arr.concat(args)
        // 处理参数
        return fn
    }
    return fn
})()

console.log(currying(1)(2)(3)(4)())