/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const inOrder = [];

        function dfs(node) {
            if(!node) return;

            dfs(node.left);
            inOrder.push(node.val);
            dfs(node.right);
        }

        dfs(root);
        console.log(inOrder);
        return inOrder[k-1];
    }
}
