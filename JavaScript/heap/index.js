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
    while (index > 0) {
        if (pNode && compare(pNode, node) > 0) {
            // 父节点大，交换位置，上浮
            heap[parentIndex] = node
            heap[index] = pNode
            index = parentIndex
        } else {
            // 父节点小于node，不必继续上浮
            return
        }
    }
}

const push = (heap, node) => {
    const index = heap.length // 相当于追加到末尾
    heap.push(node)
    // 如果把 index 放在这里拿，就会变成 const index = heap.length - 1 // 这样多了一次运算，所以放在了上边。稍微绕了一下减少一次运算
    shiftUp(heap, node, index)
}

/**
 * 获取第一个元素
 */
const peek = (heap) => heap[0] || null

/**
 * 下沉，当取出堆顶数据时，将堆尾数据放置到堆顶，进行下沉操作。配合 pop 使用
 * 复杂方法，细讲
 * 
 * 思考：如果下沉是从 第一个 往下沉，为什么还要传 i 呢？直接 shiftDown(heap, node) 就行呀？引出 i 的用途
 * 
 */
const shiftDown = (heap, node, i) => {
    let index = i
    const length = heap.length
    const halfLeangth = length >>> 1

    // index 左节点 2index + 1
    // 右节点 2index + 2
    // 2index + 2 <= length - 1
    // => index <= (length - 3) / 2  => 因为 index <= length / 2 - 1.5，得出 index 一定小于 length / 2
    // => index < length/2
    // 所以只 比较 halfLength 就可以
    // GitHub 提交记录参考: https://github.com/facebook/react/commit/316aa368654427270a53543cd3f4952746374596
    while (index < halfLeangth) {
        const leftIndex = 2 * index + 1
        const left = heap[leftIndex]
        const rightIndex = 2 * index + 2
        const right = heap[rightIndex]
        // 左边比 node 小
        if (compare(left, node) < 0) {
            // 首先右节点存在，右节点比左节点小
            // right < left < node
            if (rightIndex < length && compare(right, left) < 0) {
                // 交换 node 与 right
                heap[index] = right
                heap[rightIndex] = node
                // 接力，传递 rightIndex 给 index 继续向下执行
                index = rightIndex
            } else {
                // 左节点小
                // 交换 node 与 left
                // left < right < node 
                heap[index] = left
                heap[leftIndex] = node
                // 接力，传递 leftIndex 给 index 继续向下执行
                index = leftIndex
            }
            // left 节点比 node 大，right 节点比 node 小
        } else if (compare(right, node) < 0) {
            // 交换 node 与 right
            heap[index] = right
            heap[rightIndex] = node
            // 接力，传递 rightIndex 给 index 继续向下执行
            index = rightIndex
        } else {
            // left 节点，right节点都比 node 大，node为最小，直接 return
            return
        }
    }
}

/**
 * 弹出 第一个 元素，注意 js 中的 数组 API pop 出来的是最后一个值
 * popFirst
 */
const pop = (heap) => {
    if (heap.length === 0) return null
    // 理论上 pop 只需要吐出最后一个元素就行了，
    // 本来可以直接  return heap[0]
    // 这样引发的问题是，heap 第一个节点（根节点）弹出后，（heap 3个节点以上，弹出一个剩最少2个）树结构就散架了，成了两棵树。需要拼接起来
    // 如何拼接？
    // 1. 上位补位（空节点问题） 2. 从最后一个取，做下沉交换
    // 取 第一 和 最后一个 节点

    const first = heap[0]
    const last = heap.pop()
    // 这里解释下 first === last 的情况
    // 1 个节点，first === last
    // 大于 1 个节点， 这里有个小思路。如果 first === last
    // pop 方法就直接 弹最后一个，中间不变。这种情况列举下：是 整个堆 的数据 都相等，取谁都一样那就取最后一个，既方便（省去下沉操作），又不改变堆的特性。（这里的省事操作，从现实角度看，同优先级的末尾节点比队首的节点先执行。既然在排队了，那就后进先出，解释这个 后进先出 的利弊） 可以直接 return first，heap 数组进行 pop 最后一个元素
    if (first !== last) {
        heap[0] = last; // 这一步，把首位(根节点位置） 赋值 last 节点，相当于 remove 了 first 节点，后最终 return first 完成 pop 过程【延申 js 的 pop 实现方式，slice，原理上下标是如何补位最优化的】
        shiftDown(heap, last, 0) // 动手把 last 往下沉，把 最小节点 交换上来
    }
    return first
}