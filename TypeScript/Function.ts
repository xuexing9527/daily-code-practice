// 箭头函数写法
interface FunParam {
    [key: string]: any;
}

interface FunReturnData {
    [key: string]: any;
}

// 函数类型
interface Fun {
    // 参数正常写: 返回值类型
    (a: FunParam, b: number): FunReturnData;
}

const fun: Fun = (c, d): FunReturnData => {
    return {}
}

const fun2: Fun = (c, d): FunReturnData => {
    return {}
}

// 直接 函数声明的写法，无法使用函数类型签名
function fun3 (a: number, b: symbol, c: bigint, d: null): FunReturnData {
    return {}
}

// 这里不报错，因为 js 中数组也是对象，数组是 key 为 数字字符串的 对象
// 但是 key 为 number 和 string， a = [] 都不报错
const fun4: Fun = function (a = [], b) {
    return {}
}
