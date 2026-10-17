class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const cheapestPrice = new Array(n).fill(Infinity);

        // Price to reach the source is 0. Rest of it is Infinity for comparison
        cheapestPrice[src] = 0;
        
        // Do k+1 loop since only k flights are allowed.
        for(let i=1; i<=k+1; i++) {
            const prevPrices = [...cheapestPrice];

            for(const [from, to, ticketPrice] of flights) {

                if(prevPrices[from] == Infinity) continue;

                const candidatePrice = prevPrices[from] + ticketPrice;

                if(candidatePrice < cheapestPrice[to]) {
                    cheapestPrice[to] = candidatePrice;
                }
               
            }
        }

        return cheapestPrice[dst] == Infinity ? -1 : cheapestPrice[dst];
    }
}
