class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        const targetCount = Math.ceil(nums.length / 2);
        if(nums.length == 1) return nums[0];
        
        for(let num of nums) {
            console.log(num);
            if(map.has(num)) {
                let count = map.get(num);
                map.set(num, ++count);
                if(count >= targetCount) {
                    return num;
                }
                
            } else {
                map.set(num, 1);
            }
        }
    }
}
