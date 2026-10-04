class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // First calculate the time it takes for each car at curretn speed to reach target
        const cars = [];

        /** 
         * (target position - current position)/speed
         * target = 10
         * Position	    Speed	Time to target
            1	        3	    3 (10-1)/3
            4	        2	    3 (10-4)/2
         */
        for(let i=0; i<position.length; i++) {
            const timeToReachTarget = (target-position[i])/speed[i];
            cars.push([position[i], timeToReachTarget]);
        }

        // Sort them based on cars closest to target first
        // Since this is 1 lane and cars cannot get past
        cars.sort((a,b) => b[0] - a[0]);

        let resultFleets = 0;
        let prevTime = 0;
        for(const [pos, time] of cars) {
            if(time > prevTime) {
                resultFleets++;
                prevTime = time;
            }
        }

        return resultFleets;
    }
}
