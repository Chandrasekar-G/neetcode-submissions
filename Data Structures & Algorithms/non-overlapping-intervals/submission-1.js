class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;

        // Sort
        intervals.sort((a, b) => a[0] - b[0]);

        let prevEnd = intervals[0][1];

        for(let i=1; i<intervals.length; i++) {
            const start = intervals[i][0];
            const end = intervals[i][1];

            // Case 1: Overlap
            // Ed: [2,4] [1,4]
            // prevEnd = 4, start = 1, end = 4
            if(start < prevEnd) {
                count++;
                prevEnd = Math.min(prevEnd, end);
            }
            else {
                prevEnd = end;
            }
        }

        return count;
    }
}
