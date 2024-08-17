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
    const recurson = (obj, preKey) => {
        // 遍历对象
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const pKey = `${preKey ? `${preKey}.` : ''}${key}`
                // 类型，对象，数组，
                // 数组
                if (Array.isArray(obj[key])) {
                    recurson(obj[key], pKey)
                } else if (Object.prototype.toString.call(obj[key]) === '[object Object]') { // Obj 类型
                    // 拼 key ，点 的判断
                    recurson(obj[key], pKey)
                } else {
                    console.log(pKey)
                    target[pKey] = obj[key]
                }
            }
        }
    }

    recurson(obj, '');
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
