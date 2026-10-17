class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minProd = nums[0];
        let maxProd = nums[0];
        let result = nums[0];

        for(let i=1; i<nums.length; i++) {
            const num = nums[i];

            const candidates = [
                num,
                maxProd * num,
                minProd * num
            ];

            maxProd = Math.max(...candidates);
            minProd = Math.min(...candidates);

            result = Math.max(maxProd, result);
        }

        return result;
    }
}
