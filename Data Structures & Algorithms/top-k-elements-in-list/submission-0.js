class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**
         * Create a frequency Map
         * Loop through nums and fill the Map
         * 
         * Two options
         * 1. Sort the map and return top k nums. But complexity is O(nlogn)
         * 2. Bucket - since there'll be at most n buckets. O(n)
         */

        const map = new Map();

        // Create frequency map
        for(const num of nums) {
            if (map.get(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        console.log(map);

        // Create buckets - array of length n
        const bucket = Array.from({length: nums.length + 1}, () => []);
      
        // Loop over the map
        for (var [num, count] of map) {
            bucket[count].push(num);
        }

        const result = [];
        for (let i=bucket.length-1; i>=0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
            }
            if(result.length >= k) {
                return result;
            }
        }

    }
}
