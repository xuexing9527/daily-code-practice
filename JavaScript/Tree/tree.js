// 随机生成包含多少节点的树
class Node {
    constructor({ name, key }) {
        this.name = name
        this.key = key
    }
}

const createTree = (nums) => {
    const arr = new Array(nums).fill(0).map((_, i) => new Node({ name: `节点${i + 1}`, key: `${i + 1}` }))

    const toArray = (tree) => {
        const arr = []
        arr.push(tree)
        if (tree.children) {
            const res = tree.children.reduce((pre, current) => {
                if (current.children) {
                    arr.concat(current.children)
                    current.children.map(item => toArray(item))
                } else {
                    arr.push(current)
                }
            }, arr)
            return arr
        }
        return arr
    }

    const getLuckyIndex = (arr) => {
        if (arr && arr.length) {
            return parseInt(Math.random() * arr.length)
        }
        return 0
    }

    const getLuckyChildrenLen = (arr) => {
        return getLuckyIndex(arr) + 1
    }

    const getLuckyNode = (tree) => {
        const havebeenTreeNodeArray = toArray(tree)
        const luckyIndex = getLuckyIndex(havebeenTreeNodeArray)
        return havebeenTreeNodeArray[luckyIndex]
    }

    const toTree = (rootNode, nodesArray) => {
        // 消耗 array
        const recurson = (tree, array) => {
            if (!array.length) return
            const luckyNode = getLuckyNode(tree)
            const luckyChildrenLen = getLuckyChildrenLen(array)
            luckyNode.children = luckyNode.children || []
            new Array(luckyChildrenLen).fill(0).map(_ => {
                luckyNode.children.push(array.splice(getLuckyIndex(array), 1)[0])
            })

            recurson(tree, array)
        }

        recurson(rootNode, nodesArray)
    }

    // 选一个根节点
    const rootNode = arr.shift()
    toTree(rootNode, arr)

    return rootNode
}

// // test
// const tree = createTree(20)
// console.log(JSON.stringify(tree, null, 2))

module.exports = createTree