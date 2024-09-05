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

var merge = function(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    if (l1) tail.next = l1;
    
    if (l2) tail.next = l2;

    return dummy.next;
}

var sortList = function(head) {
    if (!head || !head.next) return head;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow.next;
    slow.next = null;

    let l1 = sortList(head);
    let l2 = sortList(middle);

    return merge(l1, l2);
};