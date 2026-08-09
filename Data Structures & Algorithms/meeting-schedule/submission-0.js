/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // Sort the intervals based on start time
        intervals.sort((a,b) => a.start - b.start);
        
        for(let i=1; i<intervals.length; i++) {
            let prev = intervals[i-1];
            let curr = intervals[i];

            if(curr.start < prev.end) return false;
        }
        return true;
    }
}
