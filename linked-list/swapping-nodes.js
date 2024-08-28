/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if (!head) return null;
    
    let left = head;
    let right = head;

    let count = 1;

    while (left !== null && count < k) {
        left = left.next;
        count++;
    }

    let current = left;

    while (current.next !== null) {
        right = right.next;
        current = current.next;
    }

    let temp = left.val;
    left.val = right.val;
    right.val = temp;

    return head;
};