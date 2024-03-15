// Depth first search
// DFS

const getTree = require('../tree')

const depthFirstSearch = (treeNode) => {
    // 递归调用阶段
    if (treeNode.children) {
        treeNode.children.forEach(child => {
            depthFirstSearch(child)
        });
    }
    // 递归回溯阶段
    console.log(treeNode)
}

// 

const tree = getTree()
depthFirstSearch(tree)  