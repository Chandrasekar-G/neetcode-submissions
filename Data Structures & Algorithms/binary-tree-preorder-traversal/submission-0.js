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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const result = [];

        function dfs(node) {
            if(!node) return;

            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return result;
    }
}
