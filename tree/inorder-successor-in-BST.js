/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

// https://www.geeksforgeeks.org/problems/inorder-successor-in-bst/1

/**
 * @param {Node} root
 * @param {Node} x
 * @return {Node}
*/

class Solution {
    constructor(arr) {
        this.successor = null;
    }

    inOrderSuccessor(root, x) {
        while (root) {
            if (root.data > x.data) {
                this.successor = root;
                root = root.left;
            } else {
                root = root.right
            }
        }

        return this.successor;
    }

}