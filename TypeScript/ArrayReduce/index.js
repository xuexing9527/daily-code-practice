var arr = [1, 2, [3, 4, [5, 6, 7, [8, [14, 15, 16], 9]]], 10, 11, [12, 13]];
function recursionArr(arr) {
    return arr.reduce(function (accumulator, cur, curIndex, arr) {
        return accumulator.concat(Array.isArray(cur) ? recursionArr(cur) : [cur]);
    }, []);
}
console.log(recursionArr(arr));
