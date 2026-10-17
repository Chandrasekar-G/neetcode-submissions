class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 1) return nums[0];
        
        function robLinear(nums) {
            const memo = {};

            function dp(i) {

                // Base case
                if(i >= nums.length) return 0;

                if(memo[i] !== undefined) return memo[i];

                const take = nums[i] + dp(i+2);
                const skip = dp(i+1);

                memo[i] = Math.max(take, skip);
                return memo[i];
            }
            return dp(0);
        }

        const case1 = robLinear(nums.slice(1));
        const case2 = robLinear(nums.slice(0, nums.length - 1));

        return Math.max(case1, case2);
    }
}
