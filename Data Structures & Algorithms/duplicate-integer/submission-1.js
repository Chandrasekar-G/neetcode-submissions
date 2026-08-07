class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
         * Create a Hashmap
         * Iterate over the array
         *      If element is present in hash return -> True
         *      Add to Hashmap
         * return -> False
         */

        const map = new Map();
        for (var i=0; i<nums.length; i++) {
            var num = nums[i];
            if(map.has(num)) return true;
            map.set(num, i);
        };

        return false;
    }
}
