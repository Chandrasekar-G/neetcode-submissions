class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];

        /**
         *  nums = [1,2,3]
         * 
         *  Start with empty array = [ [] ]
         *  Loop through nums and add it to every result so far
         *  Start                   => []
         *  1 => []                 => [1]
         *  2 => [], [1]            => [2], [1,2]
         *  3 => [], [1], [2], [1,2]=> [3], [1,3], [2,3], [1,2,3]
         */

        for(let num of nums) {
            const newSubset = [];

            for(let subset of result) {
                newSubset.push([...subset, num]);
            }
            result.push(...newSubset);
        }

        return result;
    }
}
