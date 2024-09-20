/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    const arr = [];

    const helper = (root, arr) => {
        if (root === null) return;

        helper(root.left, arr);

        arr.push(root.val);

        helper(root.right, arr);        
    }

    helper(root, arr);
   
    return arr;
};