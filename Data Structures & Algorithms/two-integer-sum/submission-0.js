class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**
         * Create a Map
         * Loop through the nos. 
         *      Find Remainder = Target - num
         *      Check if it is present in Map. If Yes, return -> True
         *      Add the num to Map
         * 
         * return -> False
         */

        const map = new Map();
        const result = [];

        for(let i=0; i<nums.length; i++) {
            const num = nums[i];
            const remainder = target - num;
            if(map.get(remainder) >= 0) {
                return [map.get(remainder), i];
            };
            map.set(num, i);
        }
    }
}
