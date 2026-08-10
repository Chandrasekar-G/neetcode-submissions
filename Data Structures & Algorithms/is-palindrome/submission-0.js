class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const allowedList = "abcdefghijklmnopqrestuvwxyz0123456789"
        let sanitizedString = "";
        s = s.toLowerCase();
        for(let char of s) {
            
            if (allowedList.includes(char)) {
                sanitizedString = sanitizedString + char;
            }
        }

        let left = 0;
        let right = sanitizedString.length - 1;

        while(left < right) {
            if (sanitizedString[left] !== sanitizedString[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
