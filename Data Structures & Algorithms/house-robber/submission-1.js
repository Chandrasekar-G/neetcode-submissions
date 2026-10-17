class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {};

        function dp(i) {
            // Base case
            if(i >= nums.length) return 0;

            if(memo[i]) return memo[i];

            const take = nums[i] + dp(i+2);
            const skip = dp(i+1);

            memo[i] =  Math.max(take, skip);
            return memo[i];
        }

        return dp(0);
    }
}
