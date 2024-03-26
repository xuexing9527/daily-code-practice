const createTree = require('../tree')

const tree1 = createTree(20)
const tree2 = createTree(20)
// tree2.children[0].children[0].children[0].children[0].value = '我加入了一个值，这里发生了变化'
// tree2.children[0].children[0].children[0].children[0].key = '我改写了这个key'

// 比较两颗 tree
// 创建一个 递归 方法，逐层 递归，比较两棵树，求diff

const treeDiff = (tree1, tree2) => {
    // 应该以新 tree 为基础，tree2为基础去遍历
    // 在 tree2 中找 tree1 的点，将 tree1 中没有的 node 加上，
    // 新增 tree1 中没有，tree2 中有的 node
    // tree1 first level

    const recursion = (node) => {
        // // 这里能拿到node
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