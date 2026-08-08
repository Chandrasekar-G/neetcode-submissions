class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            '}': '{',
            ']': '[',
            ')': '('
        };

        for(const char of s) {
            if(pairs[char]) {
                if(stack.pop() !== pairs[char]) return false;
            } else {
                stack.push(char);
            }
        }

        if(stack.length === 0) return true;
        return false;
    }
}
