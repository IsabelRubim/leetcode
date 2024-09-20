/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/submissions/1392623621/
/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    
    if (!root.children.length) return 1;

    let max = 0;

    for (let child of root.children) {
        max = Math.max(max, maxDepth(child));
    }

    return max + 1;
};