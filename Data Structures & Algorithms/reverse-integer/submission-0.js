class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MIN = -(2 ** 31);
        const MAX = (2 ** 31) - 1;

        let result = "";
        let num = Math.abs(x);
        while(num > 0) {
            result += num % 10;
            num = Math.floor(num / 10);
        }
        result = Number(result);
        if(x < 0) result = result * -1;

        if(result < MIN || result > MAX) return 0;
        return result;
    }
}
