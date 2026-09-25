class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = "";

        for(let i=0; i<s.length; i++) {
            
            // Odd palindrome - aba
            let odd = this.expand(s, i, i);

            // Even palindrome - abba
            let even = this.expand(s, i, i+1);

            if(odd.length > result.length) {
                result = odd;
            }

            if(even.length > result.length) {
                result = even;
            }
        }
        return result;
    }

    expand(s, left, right) {
        while(
            left >=0 &&
            right < s.length &&
            s[left] == s[right]
            ) {
                    left--;
                    right++;
            }
        
        return s.slice(left+1, right);
    }
}
