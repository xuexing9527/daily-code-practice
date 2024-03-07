const LinkedList = require("./linkedList")

// join two linkedList
const linkedList1 = new LinkedList()
linkedList1.append(1)
linkedList1.append(2)
linkedList1.append(3)
const linkedList2 = new LinkedList()
linkedList2.append(3)
linkedList2.append(4)
linkedList2.append(5)

// Use while make linkedList to array, and then append it.
const joinTwoLinkedList = (linkedList1, linkedList2) => {

    const createNewLinkedList = (linkedList) => {
        // Create a new LinkedList to avoid changing the params.
        // If we changed the params, when we use joinTwoLinkedList function multiple times, it will trigger some circular references easily.
        const newLinkedList = new LinkedList()
        // first one
        const first = linkedList.head
        let lastNode = first

        // add first one
        newLinkedList.append(first.value)
        // find linkeList1 last one
        while (lastNode.next !== null) {
            lastNode = lastNode.next
            // append other nodes
            newLinkedList.append(lastNode.value)
        }
        return newLinkedList
    }

    const targetLinkedList = createNewLinkedList(linkedList1)
    const appendLinkedList = createNewLinkedList(linkedList2)

    let lastNode = targetLinkedList.head
    while (lastNode.next !== null) {
        lastNode = lastNode.next
    }
    // Change the targetLinkedList's lastNode's next to appendLinkedList's head
    lastNode.next = appendLinkedList.head

    return targetLinkedList 
}

// test
// 控制台输出：LinkedList {"head":{"value":1,"next":{"value":2,"next":{"value":3,"next":null}}}}
console.log(JSON.stringify(linkedList1))
// 控制台输出：LinkedList {"head":{"value":3,"next":{"value":4,"next":{"value":5,"next":null}}}}
console.log(JSON.stringify(linkedList2))
// 控制台输出：[ 1, 2, 3 ]
console.log(linkedList1.toArray())
// 控制台输出：[ 3, 4, 5 ]
console.log(linkedList2.toArray())

// 控制台输出：{"head":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":3,"next":{"value":4,"next":{"value":5,"next":null}}}}}}}
console.log(JSON.stringify(joinTwoLinkedList(linkedList1, linkedList2)))
// 控制台输出：[ 1, 2, 3, 3, 4, 5 ]
console.log(joinTwoLinkedList(linkedList1, linkedList2).toArray())

