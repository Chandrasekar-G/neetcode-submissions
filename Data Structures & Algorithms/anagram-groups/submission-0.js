class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * Sol 1 - Anagrams look similar when sorted
         * Create a map
         * Sort the word. Chekc if it is present in the map. If not store it in an array
         * 
         * Finally return Array.From Value of the map
         */

        const map = new Map();

        for (const str of strs) {
            const sortedString = str.split("").sort().join("");
            if(map.get(sortedString)) {
                map.set(sortedString, [...map.get(sortedString),str])
            } else {    
                map.set(sortedString, [str]);
            }
        }
        return Array.from(map.values());
    }
}
