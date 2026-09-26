class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let current = nums[0];
        let result = nums[0];

        for(let i=1; i<nums.length; i++) {
            current = Math.max(nums[i], nums[i]+current);
            result = Math.max(current, result);
        }

        return result;
    }
}
