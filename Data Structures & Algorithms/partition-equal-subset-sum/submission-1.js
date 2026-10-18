class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        /**
         * target sum - total / 2
         * break if remainder is 0
         */

        const memo = {};

        function dfs(i, target) {
            const key = `${i}-${target}`;
            if(i == nums.length ) return target === 0;

            if(target < 0 ) {
                memo[key] = false;
                return memo[key];
            } 

            if(memo[key] !== undefined) return memo[key];


            memo[key] = dfs(i+1, target) || dfs(i+1, target - nums[i]);
            return memo[key];
        }

        const sum = nums.reduce((acc, num) => acc + num, 0);
        const target = sum / 2;

        if(sum%2 !== 0) return false; 
        return dfs(0, target);
    }
}
