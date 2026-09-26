class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();
        let ans = this.findSumOfSquares(n);
        let answerFound = false;
        while(!answerFound) {
            if(ans == 1) {
                return true;
            }
            else if (set.has(ans)) {
                return false;
            }
            else {
                set.add(ans);
                ans = this.findSumOfSquares(ans);
            }
        }
        
    }

    findSumOfSquares(n) {
        const digits = n.toString().split("");
        let result = 0;        
        digits.forEach(digit => {
            var no = Number(digit);
            result += (no * no);
        });
        console.log("Input - " + n + " Digits " + digits + " Output - " + result  );
        return result;
    }
}
