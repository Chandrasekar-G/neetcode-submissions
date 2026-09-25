class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const robLinear = function(nums) {
            if(nums.length == 1) return nums[0];

            const dp = new Array(nums.length);

            dp[0] = nums[0];
            dp[1] = Math.max(nums[0], nums[1]);

            for(let i=2; i<nums.length; i++) {
                dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
            }

            return dp[nums.length - 1];
        }

        if(nums.length == 1) return nums[0];

        // Case 1: Remove first element
        const case1 = robLinear(nums.slice(1));
        
        // Case 2: Remove last element
        const case2 = robLinear(nums.slice(0, nums.length-1));

        return Math.max(case1, case2);
    }
}
