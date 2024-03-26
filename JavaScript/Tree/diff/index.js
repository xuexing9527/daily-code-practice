const createTree = require('../tree')

const tree1 = createTree(20)
const tree2 = createTree(20)
// tree2.children[0].children[0].children[0].children[0].value = '我加入了一个值，这里发生了变化'
// tree2.children[0].children[0].children[0].children[0].key = '我改写了这个key'

// 比较两颗 tree
// 创建一个 递归 方法，逐层 递归，比较两棵树，求diff

const treeDiff = (tree1, tree2, level) => {
    // 以 tree1 为基础，比较tree2

    const recursion = (node1, node2, level) => {
        // node1, node2 是否相同
        // 相同，继续往下一级比较
        if (node1.value === node2.value) {
            // 比较子节点，长度是否相同，若相同
            if (node1.children.length === node2.children.length) {
                node1.children.forEach((item, i) => {
                    treeDiff(item, node2.children[i], level+= 1)
                })
            } else {
                // 子节点长度不同，先整理 key，再 diff
                // 基于 tree2 的key 顺序，排序 tree1 
                // 比较子节点的 key，将 tree2 中存在和 tree1 相同 key，移动节点并标记到队列
                // tree1: [key1, key2, key3, key4]
                // tree2: [new, key2, key1, new]
                // tree1: [移动-key1, 不动-key2, 删除-key3, 删除-key4] -> [null, key2, key1, null] -> [new, key2, key1, new]
                // TODO: 最终只需要继续 diff 相同位置的 key
                const tree1Keys = tree1.children.map((item) => item.key)
                tree1.children.forEach((item, i) => {
                    const i2 = item.key.indexOf(tree1Keys)
                    // tree2 中存在 tree1 中的 key
                    // i 移动到 i2 位置，移动
                    if (i2 > -1) {
                        console.log(i)
                    } else {
                        // 如果 tree2 中没有这个 tree1 中的这个 key，证明 key 被删除了，标记当前 key 被删除
                    }
                })
                // diff 完 children 子节点， tree2 children 长度一定 大于等于 tree1 children 长度
                // 给 tree1 补齐节点，继续 diff
                // tree1.children.forEach(item )

                // 顺序比较两个 children 数组，不必 diff 新增的节点
                tree1.children.forEach((item, i) => {
                    // 如果不是新增的
                    if (true) {
                        recursion(item, tree2.children[i], level += 1)
                    }
                })
            }
            

        } else {
            // 不同，修改差异并记录到 diff 队列
            // 分情况：删除，移动

        }

        // console.log(node)
        // 将 node 带入 tree 2
        if (node.children) {
            // 调用阶段

            node.children.forEach(ele => {
                recurrence(ele)
            });

            // 回溯阶段
        }
        // 这里能拿到node
        console.log(node)
    }

    recursion(tree1)
}

treeDiff(tree1, tree2)