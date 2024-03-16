// factorial recursion
const factorialRecursion = (n) => n > 1 ? (n * factorialRecursion(n - 1)) : n

const factorialStrPrint = (n) => {
    let str = ''
    Array.from({ length: n }, (_, i) => i !== n - 1 ? str += `${n - i} * ` : str += `${n - i} = `)
    return str
}

const n = 10
// console logs：n * (n - 1) * (n - 2) * ... * 1 = n!
console.log(`${factorialStrPrint(n)}${factorialRecursion(n)}`)