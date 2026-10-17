class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = {};

        function dp(step) {

            if(memo[step]) return memo[step];
            
            memo[1] = 1;
            memo[2] = 2;    

            if(step > 2) {
                const result = dp(step - 1) + dp(step -2);
                memo[step] = result;
            }
            return memo[step];
        }

        return dp(n);
    }
}
