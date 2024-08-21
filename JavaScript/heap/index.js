//     0
//   1   2
//  3 4 5 6
// 7 8
// 把二叉堆从上到下，从左到右拉平得到数组：
// => 
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 0的左子节点：leftChildIndex = 1 = 0 * 2 + 1 => parentIndex * 2 + 1
// 1的左子节点：leftChildIndex = 3 = 1 * 2 + 1 => parentIndex * 2 + 1
// 2的左子节点：leftChildIndex = 5 = 2 * 2 + 1 => parentIndex * 2 + 1
// => 注意是子节点和根节点的关系，而不是兄弟节点的关系：
// 相对于根节点找子节点，根节点的左子节点的下标为：leftChildIndex = 2 * parentIndex + 1

// 0的右子节点：rightChildIndex = 2 = 0 * 2 + 2 => parentIndex * 2 + 2
// 1的右子节点：rightChildIndex = 4 = 1 * 2 + 2 => parentIndex * 2 + 2
// 2的右子节点：rightChildIndex = 6 = 2 * 2 + 2 => parentIndex * 2 + 2
// => rightChildIndex = parentIndex * 2 + 2

// 1的父节点：parentIndex = parseInt((1 - 1) / 2)
// 2的父节点：parentIndex = parseInt((2 - 1) / 2)
// 3的父节点：parentIndex = parseInt((3 - 1) / 2)
// 4的父节点：parentIndex = parseInt((4 - 1) / 2) => parseInt((index -1) / 2) = (index - 1) >>> 1
// (index - 1) >>> 1 是个优化写法
// 二叉树左右节点用数组表示的公式
const minHeap = []

const compare = (left, right) => (left - right)

/**
 * 上浮，当为堆新增数据时，放入堆尾，进行上浮操作
 */
const shiftUp = (heap, node, index) => {
    const parentIndex = (index - 1) >>> 1
    const pNode = heap[parentIndex]
    while (true) {
        if (pNode && compare(pNode, node) > 0) {
            // 父节点大，交换位置，上浮
            heap[parentIndex] = node
            heap[index] = pNode
        } else {
            // 父节点小于node，不必继续上浮
            return
        }
    }
}

/**
 * 下沉，当取出堆顶数据时，将堆尾数据放置到堆顶，进行下沉操作
 */
const shiftDown = () => {

}

/**
 * 获取第一个元素
 */
const peek = () => {

}

/**
 * 弹出末尾的元素
 */
const pop = (heap) => {
    return heap.pop()
}