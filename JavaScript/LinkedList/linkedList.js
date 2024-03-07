class LinkedList {
    constructor () {
        this.head = null
    }

    // append node
    append (node) {
        // if first node
        if (this.head === null) {
            this.head = {
                value: node,
                next: null
            }
        } else {
            let isLastNode = this.head
            // find last node
            while (isLastNode.next !== null) {
                isLastNode = isLastNode.next
            }

            isLastNode.next = { value: node, next: null }
        }
    }

    toArray() {
        const arr = []
        if (this.head !== null) {
            arr.push(this.head.value)
            let isLastNode = this.head.next
            while (isLastNode !== null) {
                arr.push(isLastNode.value)
                isLastNode = isLastNode.next
            }
        }
        return [...arr]
    }

    reverse() {
        const arr = this.toArray()
        const len = arr.length - 1 
        const newLinkedList = new LinkedList()
        for (let i = len; i > -1; i -= 1) {
            newLinkedList.append(arr[i])
        }
        return newLinkedList
    }
}

// // test
// const linkedList = new LinkedList()
// console.log(linkedList) // LinkedList { head: null }

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3)

// console.log(JSON.stringify(linkedList)) // {"head":{"value":1,"next":{"value":2,"next":{"value":3,"next":null}}}}
// console.log(linkedList.toArray()) // [ 1, 2, 3 ]

// const reverseLinedList = linkedList.reverse()

// console.log(JSON.stringify(reverseLinedList)) // {"head":{"value":3,"next":{"value":2,"next":{"value":1,"next":null}}}}
// console.log(reverseLinedList.toArray()) // [ 3, 2, 1 ]

module.exports = LinkedList