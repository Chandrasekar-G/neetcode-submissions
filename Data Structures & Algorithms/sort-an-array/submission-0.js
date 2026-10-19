class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // Merge sort

        if(nums.length <= 1) return nums;

        // Divide and Merge repeatedly
        const mid = Math.floor(nums.length/2);

        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }

    merge(left, right) {
        const result = [];

        while(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return [...result,...left, ...right];
    }
}
