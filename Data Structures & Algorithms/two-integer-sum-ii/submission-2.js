class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = [];
        let left = 0;
        let right = numbers.length;

        while(left < right) {
            const addedResult = numbers[left] + numbers[right];
            if(addedResult == target) 
                return [left+1, right+1];
            else if(addedResult < target) {
                left++;
            } else {    
                right--;
            }
        }
    }
}
