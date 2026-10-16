class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums.sort((a,b) => b - a);
        return nums[k-1];
    }

    /**
    Heap solution

     findKthLargest(nums, k) {
        const heap = new MinHeap();

        for (const num of nums) {
            heap.insert(num);

            if (heap.size() > k) {
                heap.extractMin();
            }
        }

        return heap.peek();
    }
     */
}
