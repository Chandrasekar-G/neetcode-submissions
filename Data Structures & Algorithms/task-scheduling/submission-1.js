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
        /***
         * 
         * tasks = ["A", "A", "A", "B", "B", "B"]; and n = 2;
         
         * Fidn the max occuring task
         * If A occurs 3 times, we need two gaps between its executions:
            A _ _ A _ _ A
            There are maxf - 1 gaps because the final A does not need another gap after it.

         * For example, with n = 2, the section has 3 slots:
            A _ _ | A _ _ | A
            
            With two full sections: = (maxf-1)(n+1)
            
            For our example: (3-1)(2+1)=6
            
            If multiple tasks appear same times in our case B - that also has to be added
            So, final formula becomes (maxf-1)(n+1) + maxCount
         * 
         */

        const time = (maxf - 1) * (n + 1) + maxCount;

        return Math.max(time, tasks.length);

    }
}
