class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let digitSquare = this.getDigitSquare(n);
        const memorySet = new Set();
        while(digitSquare !== 1 && !memorySet.has(digitSquare)) {
            memorySet.add(digitSquare);
            digitSquare = this.getDigitSquare(digitSquare);
        }
        if(digitSquare === 1) return true;
        return false;
    }

    getDigitSquare(n) {
        const digits = String(n).split("");
        return digits.reduce((acc, digit) => {
            let num = Number(digit);
            let square = num * num;
            return acc + square;
        }, 0);
    }
}
