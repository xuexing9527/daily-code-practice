const arr = [1, 2, [3, 4, [5, 6, 7, [8, [ 14, 15, 16] , 9]]], 10, 11, [12, 13]]

function arrFlatten (arr: any) {
    return arr.reduce((accumulator: any, cur: any, curIndex: number, arr: any) => {
        return accumulator.concat(Array.isArray(cur) ? arrFlatten(cur) : [cur])
    }, [])
}
console.log(arrFlatten(arr))
