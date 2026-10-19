class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        
        for(let i=1; i<strs.length; i++) {
            let j=0;

            while(j < Math.min(prefix.length, strs[i].length)) {
                if(prefix[j] !== strs[i][j]) {
                    break;
                }
                j++;
            }
            // Now prefix is the lcm of the two strings and will
            // be used for next comparison
            prefix = prefix.slice(0,j);
        }
        return prefix;
    }
}