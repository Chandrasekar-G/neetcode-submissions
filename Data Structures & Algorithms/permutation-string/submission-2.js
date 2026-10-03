class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // If s2's length is lesser than s1's, return false
        if(s2.length < s1.length) return false;

        // Create a freqeuncy map for s1 which we'll use for comparison
        const targetFreq = new Map();

        for(let char of s1) {
            if(targetFreq.has(char)) {
                targetFreq.set(char, targetFreq.get(char) + 1);
            } else {
                targetFreq.set(char, 1);
            }
        }


        // Create a window Map for storing freq of chars in the window
        const windowFreq = new Map();
        
        // Iterate over entire s2
        // Update the frequency map on the go
        // If the window size matches, do the compariosn
        // Return true if it matches else, slide the window
        let left = 0;
        for(let right = 0; right < s2.length; right++) {
            const char = s2[right];
            if(windowFreq.has(char)) {
                windowFreq.set(char, windowFreq.get(char) + 1);
            } else {
                windowFreq.set(char, 1);
            }

            if((right - left + 1) > s1.length) {
                // Delete the left most element from window ferq
                const leftChar = s2[left];
                if(windowFreq.get(leftChar) > 1) {
                    windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
                } else {
                    windowFreq.delete(leftChar);
                }
                left++;
            }

            if((right - left + 1) == s1.length) {
                // Do the comparison
                let match = true;
                for(const [char, freq] of targetFreq) {
                    if(windowFreq.get(char) !== freq) {
                        match = false;
                        break;
                    }
                }

                if(match && windowFreq.size == targetFreq.size) {
                    return true;
                }
            }
        }

        return false;
    }
}
