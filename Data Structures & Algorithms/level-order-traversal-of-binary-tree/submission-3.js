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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];

        while(queue.length > 0) {
            const levelSize = queue.length;
            const currentResult = [];
            for(let i=0; i<levelSize; i++) {
                const node = queue.shift();
                currentResult.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            result.push(currentResult);
        }

        return result;
    }
}
