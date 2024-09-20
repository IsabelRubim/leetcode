/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = null, max = null) {
    if (root === null) return true;
    
    if (min && root.val <= min.val || max && root.val >= max.val) return false;

    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};