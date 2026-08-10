class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        function backTrack(start, remaining) {
            if(remaining == 0) {
                result.push([...current]);
                return;
            }
            if(remaining < 0) {
                return;
            }

            for(let i=start; i<nums.length; i++) {
                current.push(nums[i]);
                backTrack(i, remaining-nums[i]);
                current.pop(nums[i]);
            }
        }

        backTrack(0, target);
        return result;
    }
}
