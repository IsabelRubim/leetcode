/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = [];

    const helper = (root, arr) => {
        if (root === null) return;

        helper(root.left, arr);

        helper(root.right, arr);

        arr.push(root.val);
    }

    helper(root, arr);
   
    return arr;
};