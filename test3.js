const obj = {
	a: 1,
	b: [1,2,3,4],
	c: null,
	d:{
		e: [1,2,3],
		f: false
	}
}

function flattObj (obj) {
    const target = {};
    // const 
    // 深层遍历，拼接 key
    const recurson = (obj, preKey, targetObj) => {
        console.log(targetObj)
        // 遍历对象
        for (const key in obj) {
            // 类型，对象，数组，
            // 数组
            if (Array.isArray(obj[key])) {
                targetObj[`${preKey}.${key}`] = []
                recurson(obj[key], key, targetObj[`${preKey}.${key}`])
            } else if (Object.prototype.toString.call(obj[key]) === '[object Object]') { // Obj 类型
                // 拼 key ，点 的判断
                targetObj[`${preKey}.${key}`] = {}
                recurson(obj[key], key, targetObj[`${preKey}.${key}`])
            } else {
                console.log(targetObj[`${preKey}.${key}`])
                targetObj[`${preKey}.${key}`] = obj[key]
            }
        }
    }

    recurson(obj, '', target);
    console.log(target)
}

flattObj(obj)
// {
// 	"a": 1,
// 	"b.0": 1,
// 	"b.1": 2,
// 	...
// 	"c": null,
// 	"d.e.0": 1,
// 	...
// }
