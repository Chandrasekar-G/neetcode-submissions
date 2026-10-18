class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length <= 0) return [];
         const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };

        let res = [''];

        for(let digit of digits) {
            const temp = [];
            for(let char of res) {
                for(const c of digitToChar[digit]) {
                    temp.push(char + c);
                }
            }
            res = temp;
        }

        return res;
    }
}
