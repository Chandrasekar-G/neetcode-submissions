class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        /**
         *  1. Expand right
            2. If replacements > k → move left
            3. Keep the biggest valid window
         */
        let left = 0;
        let result = 0;
        let maxFreq = 0;

        const map = new Map();

        for(let right = 0; right < s.length; right++) {
            const currentChar = s[right];

            map.set(currentChar, (map.get(currentChar) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(currentChar));

            let replacementsRequired = (right-left+1) - maxFreq;

            if(replacementsRequired > k) {
                map.set(s[left], (map.get(s[left]) - 1));
                left++;
            }

            result = Math.max(result, (right-left+1));

        }
        return result;
    }
}
