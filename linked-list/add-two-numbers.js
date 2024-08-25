/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let point1 = l1,
        point2 = l2,
        num1 = 0,
        num2 = 0,
        carry = 0,
        solution = new ListNode(0),
        current = solution;

    while (point1 !== null || point2 !== null) {
        num1 = point1 ? point1.val : 0;
        num2 = point2 ? point2.val : 0;

        if (num1 + num2 + carry > 9) {
            current.next = new ListNode(num1 + num2 + carry - 10);
            current = current.next;
            carry = 1;
        } else {
            current.next = new ListNode(num1 + num2 + carry);
            current = current.next;
            carry = 0;
        }

        if (point1) point1 = point1.next;
        if (point2) point2 = point2.next;
    }

    if (carry) current.next = new ListNode(carry);
    return solution.next;
};

// Time Complexity = O(n)
// Space Complexity = O(n)