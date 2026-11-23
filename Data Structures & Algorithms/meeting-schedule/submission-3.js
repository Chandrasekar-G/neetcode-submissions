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
        if(intervals.length <= 0) return true;
        
        // Sort based on start time
        intervals.sort((a,b) => a.start - b.start);

        let start = intervals[0].start;
        let end = intervals[0].end;

        for(let i=1; i<intervals.length; i++) {
            let newStart = intervals[i].start;
            let newEnd = intervals[i].end;

            if(newStart < end) {
                return false;
            }
            
            start = intervals[i].start;
            end = intervals[i].end;
        }

        return true
    }
}
