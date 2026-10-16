class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Count the frequency of each of the 26 uppercase letters
        const count = new Array(26).fill(0);

        for(const task of tasks) {
            const index = task.charCodeAt(0) - "A".charCodeAt(0);
            count[index] += 1; 
        }

        const maxf = Math.max(...count);

        let maxCount = 0;

        for(const c of count) {
            if(c == maxf) {
                maxCount++;
            }
        }

        const time = (maxf - 1) * (n + 1) + maxCount;

        return Math.max(time, tasks.length);

    }
}
