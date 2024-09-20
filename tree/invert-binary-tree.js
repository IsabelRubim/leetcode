/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/invert-binary-tree/description/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;

    let aux = root.left;
    root.left = root.right;
    root.right = aux;

    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};