// 给定一个数组，里面是时间戳，来判断时间戳年月的跨度(找出其中从那一年月到哪一年月)
const arr = [1689842627138, 1689929027138, 1721465027138]
const fun = (arr) => {
    if (!arr.length) return []
    const sortArr = arr.sort((a, b) => (a -b))
    const start = sortArr[0]
    const last = sortArr.slice(-1)[0]
    // 获取年份差值 * 12 + 月份差值
    const startYear = new Date(start).getFullYear()
    const endYear = new Date(last).getFullYear()
    
    const startMonth = new Date(start).getMonth()
    const endMonth = new Date(last).getMonth()
    
    // 相差的月份
    const minusMonth = (endYear - startYear) * 12 + (endMonth - startMonth)
    const targetArr = arr.map(item => new Date(item))

    // 八月份筛选归类到每个月，比如8月3天，{ xxxx-8: [xxxx-08-02, xxxx-08-04a, xxxx-08-09] }
    const hashAggregateByMonth = (arr) => {
        const obj = {}
        arr.forEach(element => {
            const y = new Date(element).getFullYear()
            const m = new Date(element).getMonth() + 1
            const key = `${y}-${m}`
            if (obj[key]) {
                if (Array.isArray(obj[key])) {
                    obj[key].push(element)
                } else {
                    throw Error('数据有误，obj 属性值 应当是 Array')
                }
            } else {
                obj[key] = [element]
            }
        });
        return obj
    }

    console.log('月份相差：', minusMonth)
    console.log('目标数组：', targetArr)
    console.log('月份归类：', hashAggregateByMonth(targetArr))
}

fun(arr)

// 思考：如何用 sql 命令查询出按月份归类好的数据？
