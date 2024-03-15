// factorial
const recursion = (n) => n > 1 ? (n * recursion(n - 1)) : n

console.log(recursion(10))