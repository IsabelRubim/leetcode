/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/balanced-binary-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    const dfs = (node) => {
        if (!node) return 0;

        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);

        if (Math.abs(left - right) > 1) return Infinity;

        return Math.max(left, right);
    }

    return dfs(root) === Infinity ? false : true;
};