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
     * @return {boolean}
     */
    isValidBST(root) {

        function dfs(node, min, max) {
            if(!node) return true;

            // Current value must be inside the allowed range
            if(node.val <= min || node.val >= max) {
                return false;
            }

            // Left subtree:
            // everything must be smaller than current node
            const left = dfs(node.left, min, node.val);

            // Right subtree:
            // everything must be greater than current node
            const right = dfs(node.right, node.val, max);

            return left && right;
        }

        // Root does not have any boundary limit
        return dfs(root, -Infinity, Infinity);
    }
}
