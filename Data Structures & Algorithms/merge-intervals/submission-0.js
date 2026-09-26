class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length <= 1) return intervals;

        // Sort them based on start val
        intervals.sort((a,b) => a[0] - b[0]);

        const result = [];
        let currentStart = intervals[0][0];
        let currentEnd = intervals[0][1];

        for(let i=1; i<intervals.length; i++) {
            const start = intervals[i][0];
            const end = intervals[i][1];

            // Case 1: Overlap 
            // Eg: [[1,3], [1,5]]
            if(start <= currentEnd) {
                currentEnd = Math.max(end, currentEnd)
            } else {
                result.push([currentStart, currentEnd]);
                currentStart = start;
                currentEnd = end;
            }
        }
        result.push([currentStart, currentEnd]);
        return result;

    }
}
