/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let front = head;

    const isPalindromeHelper = (current) => {
        if (current === null) return true;

        if (!isPalindromeHelper(current.next)) return false;

        if (current.val !== front.val) return false;

        front = front.next;

        return true;
    };

    return isPalindromeHelper(head);   
};