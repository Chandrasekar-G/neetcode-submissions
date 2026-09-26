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
        console.log(intervals);
        const events = [];

        // Create a stream of events
        for(const interval of intervals) {
            events.push([interval.start, "start"]);
            events.push([interval.end, "end"]);
        }

        // Sort them, if two tims are smae, end must be processed first 
        events.sort((a,b) => {
            if(a[0] == b[0]) {
                return a[1] === "start" ? 1 : -1;
            }
            return a[0] - b[0];
        });

        // Increment room on an event start
        // Decrement on event end
        // Keep track of a max

        let maxRooms = 0;
        let rooms = 0;
        for(const [time, eventType] of events) {
            if(eventType == "start") {
                rooms++;
                maxRooms = Math.max(rooms,maxRooms);
            } else {
                rooms--;
            }
        }

        return maxRooms;
    }
}
