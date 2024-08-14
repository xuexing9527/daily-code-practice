/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    function recursion (node1, node2, node3, node3Pre) {
        const next = node3.val;
        if (!node2 && !node1) {      
            // 如果 node3 最后一个 val 是 0, 证明没有进位，此时返回应当指向 null
            if (node3.val === 0) {
                node3Pre.next = null; 
            } 
            return;
        }

        let sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + next;
        node3.next = new ListNode();
        
        if (sum > 9) {
            sum -= 10;
            node3.next.val = 1;
        }

        node3.val = sum;
        recursion(node1 ? node1.next : 0, node2 ? node2.next : 0, node3.next, node3);
    }

    const l3 = new ListNode();
    recursion(l1, l2, l3, l3);
    return l3;
};