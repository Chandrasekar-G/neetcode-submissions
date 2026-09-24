class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Sort the array
        nums.sort((a,b) => a-b);

        const result = new Set();

        // Loop each number till len -2 (since there are three nos into account)
        // fix i and do two pointer solution

        for(let i=0; i<nums.length-2; i++) {
            let left = i+1;
            let right = nums.length-1;

            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if(sum === 0) {
                    result.add(JSON.stringify([nums[i], nums[left], nums[right]]));
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                }
            }
        }
        return Array.from(result).map((item) => JSON.parse(item));
    }

}
