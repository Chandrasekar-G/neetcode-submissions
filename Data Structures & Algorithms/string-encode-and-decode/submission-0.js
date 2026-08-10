class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(const str of strs) {
            const len = str.length;
            result += len + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i=0;

        while(i<str.length) {
            let j = i;
            while(str[j] != "#") {
                j++;
            }
            const wordLen = Number(str.substring(i,j));
            const word = str.substring(j+1, j+1+wordLen);
            result.push(word);
            i = j+1+wordLen;
        }


        return result;
    }
}
