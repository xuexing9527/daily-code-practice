// 给定一个数组，里面是时间戳，来判断时间戳年月的跨度(找出其中从那一年月到哪一年月)
const arr = [1689842627138, 1721465027138]
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
    
    console.log('月份相差：', minusMonth)
    console.log('目标数组：', targetArr)
}

fun(arr)
