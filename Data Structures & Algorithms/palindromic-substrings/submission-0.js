class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for(let i=0; i<s.length; i++) {
            // Odd length palindrome - aba
            count += this.expand(s, i, i);

            // Even length palindrome - abba
            count += this.expand(s, i, i+1);

        }

        return count;
    }
    
    expand(s, left, right) {
        let count = 0;

        while(
            left >=0 &&
            right < s.length &&
            s[left] == s[right]
        ) {
            count++;
            left--;
            right++;
        }
        return count;
    }
}
