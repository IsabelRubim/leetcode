/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
        
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current !== null && current.next !== null) {
        const nextPair = current.next.next;
        let second = current.next;

        second.next = current
        current.next = nextPair;
        prev.next = second;

        prev = current;
        current = nextPair;
    }

    return dummy.next;
};

// Time - O(n)
// Space - O(1)