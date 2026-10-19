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
    zigzagLevelOrder(root) {
        if(!root) return [];

        const result = [];
        const queue = [root];
        let isLeftToRight = true;
        
        while(queue.length > 0) {
            const queueLength = queue.length;
            const levelResult = [];

            for(let i=0; i<queueLength; i++) {
                const node = queue.shift();
                levelResult.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            if(!isLeftToRight) {
                    levelResult.reverse();
            }
            isLeftToRight = !isLeftToRight;
            result.push(levelResult);
        }
        return result;
    }
}
