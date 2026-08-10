class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const left = new Array(len);
        const right = new Array(len);
        const result = new Array(len);

        left[0] = 1;
        right[len - 1] = 1;
        /**
         *  Num     ->  [1, 2,  4,  6]
         *  left    ->  [1, 1,  2,  8]
         *  right   ->  [48,24, 6,  1]
         *  result  ->  [48, 24, 12, 8]  
         */
        
        for(var i=1; i<len; i++) {
            left[i] = nums[i-1] * left[i-1];
        }

        for(var j=len-2; j>=0; j--) {
            right[j] = nums[j+1] * right[j+1];
        }

        for(var k=0; k<len; k++) {
            result[k] = left[k] * right[k];
        }

        return result;

    }
}
