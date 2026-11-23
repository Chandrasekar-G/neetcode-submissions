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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const events = [];
        intervals.forEach(interval => {
            events.push({"type": "start", "time": interval.start});
            events.push({"type": "end", "time": interval.end});
        });

        // Sort them based on time
        // For same time, end must take precendence
        events.sort((a,b) => {
            if(a.time === b.time) {
                return a.type == "start" ? 1 : -1;
            } else {
                return a.time - b.time;
            }
        });

        console.log(events);

        let maxRooms = 0;
        let rooms = 0;
        events.forEach(event => {
            if(event.type == "start") {
                rooms++;
                maxRooms = Math.max(rooms, maxRooms);
            } else {
                rooms--;
            }
        });

        return maxRooms;
    }

}
