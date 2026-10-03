class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i=0; i< temperatures.length; i++) {
            // Check if today's temperature is warmer than
            // the days waiting in the stack
            while(
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) { 
                // Get the previous day that is waiting
                const prevDay = stack.pop();
                // We found a warmer day for previousDay
                //
                // Example:
                // previousDay = 2
                // current day = 5
                //
                // Answer = 5 - 2 = 3 days
                result[prevDay] = i - prevDay;
            }
            stack.push(i);
        }
        return result;
    }
}
