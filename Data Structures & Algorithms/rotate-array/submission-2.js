class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // Input => [1, 2, 3, 4, 5, 6, 7, 8]
        // Rotate 4 times
        /**
         * Step 1 : Reverse the entire array
         * 
         * [8, 7, 6, 5, 4, 3, 2, 1]
         * 
         * Step 2: Reverse from 0 till k
         * [5, 6, 7, 8, 4, 3, 2, 1]
         * 
         * Step 2: Reverse from k till len-1
         * [5, 6, 7, 8, 1, 2, 3, 4]
         */

        function reverse(left, right) {

            while(left < right) {
                const temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left++;
                right--;
            }
        }

        const n = nums.length;

        k = k % n;

        reverse(0, n-1);
        reverse(0, k-1);
        reverse(k, n-1);
    }
}
