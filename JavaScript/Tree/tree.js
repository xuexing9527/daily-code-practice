const getTree = () => JSON.parse(JSON.stringify({
    key: '1',
    pKey: '0',
    children: [
        {
            key: '1_1',
            pKey: '1',
            children: [
                {
                    key: '1_1_1',
                    pKey: '1_1',
                    children: [
                        {
                            key: '1_1_1_1',
                            pKey: '1_1_1',
                            children: [
                                {
                                    key: '1_1_1_1_1',
                                    pKey: '1_1_1_1'
                                }
                            ]
                        },
                        {
                            key: '1_1_1_2',
                            pKey: '1_1_1_1'
                        },
                        {
                            key: '1_1_1_3',
                            pKey: '1_1_1_1'
                        },
                    ]
                },
                {
                    key: '1_1_2',
                    pKey: '1_1',
                },
                {
                    key: '1_1_3',
                    pKey: '1_1',
                },
            ]
        },
        {
            key: '1_2',
            pKey: '1',
            children: [
                {
                    key: '1_2_1',
                    pKey: '1_2',
                    children: [
                        {
                            key: '1_2_1_1',
                            pKey: '1_2_1',
                        }
                    ]
                }
            ]
        },
        {
            key: '1_3',
            pKey: '1',
            children: [
                {
                    key: '1_3_1',
                    pKey: '1_3',
                    children: [
                        {
                            key: '1_3_1_1',
                            pKey: '1_3',
                            children: [
                                {
                                    key: '1_3_1_1_1',
                                    pKey: '1_3_1_1'
                                }
                            ]
                        },
                        {
                            key: '1_3_1_2',
                            pKey: '1_3_1'
                        },
                        {
                            key: '1_3_1_3',
                            pKey: '1_3_1'
                        },
                    ]
                },
                {
                    key: '1_3_2',
                    pKey: '1_3',
                },
                {
                    key: '1_3_3',
                    pKey: '1_3',
                },

            ]
        },
        {
            key: '1_4',
            pKey: '1',
            children: [
                {
                    key: '1_4_1',
                    pKey: '1_4',
                },
                {
                    key: '1_4_2',
                    pKey: '1_4',
                    children: [
                        {
                            key: '1_4_2_1',
                            pKey: '1_4_2',
                        },
                    ]
                },

            ]
        }

    ]
}))

// 随机生成包含多少节点的树
class Node {
    constructor({ name, key }) {
        this.name = name
        this.key = key
    }
}

// 
const tree = (nums) => {
    const arr = []
    for (let i = 1; i < nums; i += 1) {
        arr.push(new Node({ name: `节点${i}`, key: `${i}` }))
    }

    const toTree = (nodesArray) => {
        // 选一个根节点
        const rootNode = nodesArray.pop()
        console.log(rootNode)

        const toArray = (tree) => {
            const arr = []
            if (tree.children) {
                return tree.children.reduce((pre, current) => {
                    console.log(pre)
                    console.log(current)
                    if (current.children) {
                        arr.concat(current.children)
                        current.children.map(item => toArray(item))
                    } else {
                        arr.push(current)
                    }
                }, arr)
            }

            arr.push(tree)
            return arr
        }

        const getLuckyIndex = arr => parseInt(Math.random() * arr.length)
        const getLuckyChildrenLen = arr => parseInt(Math.random() * arr.length)

        const recurson = (tree, array) => {
            if (!array.length) return

            const getLuckyNode = (tree) => {
                const havebeenTreeNodeArray = toArray(tree)
                console.log(1, havebeenTreeNodeArray)
                console.log(getLuckyIndex(havebeenTreeNodeArray))
                return havebeenTreeNodeArray[getLuckyIndex(havebeenTreeNodeArray)]
            }

            const luckyNode = getLuckyNode(tree)
            console.log(luckyNode)
            const luckyChildrenLen = getLuckyChildrenLen(array)
            console.log(luckyChildrenLen)

            luckyNode.children = luckyNode.children || []
            new Array(luckyChildrenLen).fill(0).map(_ => {
                luckyNode.children.push(array[getLuckyIndex(array)])
            })
            recurson(tree, array)
        }

        recurson(rootNode, nodesArray)
    }

    toTree(arr)
}

tree(10)

module.exports = getTree