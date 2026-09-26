class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs) {
            const countArr = new Array(26).fill(0);
            for(const c of str) {
                const charIndex = c.charCodeAt(0)-97;
                countArr[charIndex]++;
            }

            const charKey = countArr.join("#");
            if(map.get(charKey)) {
                map.set(charKey, [...map.get(charKey), str]);
            } else {
                map.set(charKey, [str]);
            }
        }

        return Array.from(map.values());
    }
}
