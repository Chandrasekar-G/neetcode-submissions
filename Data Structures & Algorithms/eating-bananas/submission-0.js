class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while(left <= right) {
            let hours = 0;
            const mid = Math.floor((left + right) / 2);

            for(let pile of piles) {
                hours += Math.ceil(pile/mid);
            }

            if(hours <= h) {
                result = mid;
                // Too fast, try smaller speed
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
