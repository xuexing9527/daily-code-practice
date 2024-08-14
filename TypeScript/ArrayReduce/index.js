"use strict";
const arr = [1, 2, [3, 4, [5, 6, 7, [8, [14, 15, 16], 9]]], 10, 11, [12, 13]];
// const arrFlatten = (arr: any) => arr.reduce((accumulator: any, cur: any, curIndex: number, arr: any) => accumulator.concat(Array.isArray(cur) ? arrFlatten(cur) : [cur]), [])
function arrFlatten(arr) {
    return arr.reduce((accumulator, cur, curIndex, arr) => {
        return accumulator.concat(Array.isArray(cur) ? arrFlatten(cur) : cur);
    }, []);
}
console.log(arrFlatten(arr));
