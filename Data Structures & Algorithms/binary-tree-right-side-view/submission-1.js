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
    rightSideView(root) {
        // Same as BST level order traversal
        // Just one more condition while pushing the result
        // The level size must be last - since we deal with right most element
        if(!root) return [];
        const queue = [root];
        const result = [];

        while(queue.length > 0) {
            const levelSize = queue.length;
            for(let i=0; i<levelSize; i++) {
                const node = queue.shift();

                if(i == levelSize - 1) result.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }

        return result;
    }
}
