class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        /**
         * If the length is different return -> False
         * 
         * Loop over the first string and create a hash of charatcter -> frequency
         * 
         * Loop over the second string and try decrementing the values in hash.
         *  If there is any mismatch : not found, or count is 0, return -> False
         * 
         * return True
         */

        if(s.length !== t.length) return false;

        const map = new Map();

        for(let c of s) {
            if (map.get(c)) {
                map.set(c, map.get(c) + 1);
            } else {
                map.set(c, 1);
            }
        }

        for(let c of t) {
            if(map.get(c) && map.get(c) > 0) {
                map.set(c, map.get(c) - 1);
            } else {
                return false;
            }
        }

        return true;

    }
}
