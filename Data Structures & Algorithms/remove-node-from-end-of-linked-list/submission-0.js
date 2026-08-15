/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let slow = dummy;
        let fast = dummy;
        for(let i=0; i<n; i++) {
            fast = fast.next;
        }

        while(fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        // Now slow would be at the node just before the node we wabt to delete
        let temp = slow.next.next;
        slow.next = temp;

        return dummy.next;
    }
}
