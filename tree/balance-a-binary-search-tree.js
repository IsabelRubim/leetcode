/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// https://leetcode.com/problems/balance-a-binary-search-tree/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const arr = [];

    const helper = (root, list) => {
        if (root === null) return;

        helper(root.left, list);

        list.push(root.val); // visit

        helper(root.right, list);        
    };
   
    const balance = (list, left, right) => {
        if (left > right) return null;
        let mid = Math.floor((left + right) / 2);

        let root = new TreeNode(list[mid]);
        root.left = balance(list, left, mid-1);
        root.right = balance(list, mid+1, right);

        return root;
    };

    helper(root, arr);
    return balance(arr, 0, arr.length - 1)
};