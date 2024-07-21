// 给定一个数组，里面是时间戳，来判断时间戳年月的跨度(找出其中从那一年月到哪一年月)
const arr = [1689842627138, 1721465027138]
// 获取年份差值 * 12 + 月份差值
const startYear = new Date(1689842627138).getFullYear()
const endYear = new Date(1721465027138).getFullYear()

const startMonth = new Date(1689842627138).getMonth()
const endMonth = new Date(1689842627138).getMonth()

// 相差的月份
console.log((endYear - startYear) * 12 + (endMonth - startMonth))