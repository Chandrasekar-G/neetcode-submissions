class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let last = m + n -1;
        let num1Ptr = m - 1;
        let num2Ptr = n - 1;

        // Both num1Ptr and num2Ptr point to the last element
        // We compare them and add them to the final slot (since it is empty)
        // and then move left

        while(num2Ptr >= 0) {
            if(nums1[num1Ptr] > nums2[num2Ptr]) {
                // num1 is greater. So add it to the last
                nums1[last--] = nums1[num1Ptr--];
            } else {
                nums1[last--] = nums2[num2Ptr--];
            }
        }
    }
}
