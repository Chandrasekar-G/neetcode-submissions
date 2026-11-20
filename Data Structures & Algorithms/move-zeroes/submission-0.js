class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        // Hint = Move all non-zeroes to left
        // Not zeroes to right

        let left = 0;
        for(let right = 0; right < nums.length; right++) {
            if(nums[right] !== 0) {
                [nums[right], nums[left]] = [nums[left], nums[right]];
                left++;
            }
        }
    }
}
