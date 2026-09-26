class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];

        let newStart = newInterval[0];
        let newEnd = newInterval[1];

        for(const interval of intervals) {
            const start = interval[0];
            const end = interval[1];

            // Case 1: curent is before new
            // Eg: [[1,2]]  [3,4]
            if(end < newStart) {
                result.push(interval)
            }

            // Case 2: current is after new
            // Eg: [[3,4]]  [1,2]
             else if (start > newEnd) {
                result.push([newStart, newEnd]);

                newStart = start;
                newEnd = end;
             }

             // Case 3: Overlap
             // Eg: [[1,3], [4,6]] [2,5]
             else {
                newStart = Math.min(start, newStart);
                newEnd = Math.max(end, newEnd);
             }
        }

        result.push([newStart, newEnd]);
        return result;
    }

}
