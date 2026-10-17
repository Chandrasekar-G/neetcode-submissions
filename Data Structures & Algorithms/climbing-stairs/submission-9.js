class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    // Recursive solution
    /**
    climbStairs(n) {
        // 1. Start with Recursive solution
        // 2. Add memoto optimise

        // Base case 
        // To reach 1st step - 1
        // To reach 2nd step - 2

        if(n == 1 || n == 2) return n;

        return this.climbStairs(n-1) + this.climbStairs(n-2); 
    }
     */

    climbStairs(num) {
        const memo = {};

        function dp(n) {
            if(n == 0 || n == 1) return 1;

            if(memo[n]) return memo[n];

            memo[n] = dp(n-1) + dp(n-2);
             
            return memo[n];
        }

        return dp(num);
    }
}
