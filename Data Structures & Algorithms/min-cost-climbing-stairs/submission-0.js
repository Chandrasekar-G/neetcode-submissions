class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        const memo = {};

        function dp(i) {

            // Base case 
            if( i >= cost.length) return 0;

            if(memo[i]) return memo[i];
            
            memo[i] = cost[i] + Math.min(dp(i+1), dp(i+2));
            return memo[i];
        }

        return Math.min(dp(0), dp(1));

    }
}
