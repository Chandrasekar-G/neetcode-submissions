class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const memo = {};

        function dp(remaining) {
            if(remaining == 0) return 0;
            if(remaining < 0) return Infinity;

            if(memo[remaining] !== undefined) return memo[remaining]; 

            let minCoins = Infinity;

            for(const coin of coins) {
                const result = 1 + dp(remaining - coin);
                minCoins = Math.min(minCoins, result);
            }
            memo[remaining] = minCoins;
            return memo[remaining];
        }

        const result = dp(amount);
        return result === Infinity ? -1 : result;
    }
}
