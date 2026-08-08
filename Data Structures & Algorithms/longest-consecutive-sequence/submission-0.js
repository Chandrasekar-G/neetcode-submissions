class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for(const num of nums) {
            // If num-1 is present in the set, this is not a starting sequence, so just continue
            if(set.has(num-1)) {
                continue;
            }

            let length = 0;
            while(set.has(num+length)){
                length++;
            }
            longest = Math.max(length, longest);
        }
        return longest;
    }
}
