class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        const memo = {};

        function dp(i) {
            // Base case
            if(i == s.length) return 1;
            if(s[i] == '0') return 0;

            if(memo[i] !== undefined) return memo[i];

            // Decode one digit
            let ways = dp(i+1);

            // Decode two if valid
            if((i+1) < s.length) {
                const num = Number(s.substring(i, i+2));

                if(num <= 26) {
                    ways += dp(i+2);
                }
            }
            memo[i] = ways;
            return ways;
        }

        return dp(0);
    }
}
