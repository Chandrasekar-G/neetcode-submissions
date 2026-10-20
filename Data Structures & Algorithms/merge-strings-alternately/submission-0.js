class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let i=0;

        while(word1.length > i && word2.length > i) {
            result += word1[i] + word2[i];
            i++;
        }

        if(word1.length > i) {
            result += word1.substring(i, word1.length);
        } else if( word2.length > i) {
            result += word2.substring(i, word2.length);
        }

        return result;
    }
}