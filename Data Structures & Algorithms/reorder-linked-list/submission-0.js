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
     * @return {void}
     */
    reorderList(head) {
        if(head == null || head.next == null) return;

        // 1. Find the middle of the list
        let slow = head;
        let fast = head;
        // 1 -> 2 -> 3 -> 4 -> 5
        //           S
        //                     F   
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Disconnet and Reverse the second half.
        let second = slow.next;
        slow.next = null;
        // first =  1 -> 2 -> 3
        // second = 4 -> 5
        let prev = null;
        while (second != null) {
            let temp = second.next
            second.next = prev;
            prev = second;
            second = temp;
        }

        // 3. Join first and second alernatively
        let first = head;
        second = prev;
        while (second != null) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }

        return first;
    }
}
