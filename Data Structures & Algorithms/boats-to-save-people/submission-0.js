class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // Sort the peple ascending
        // Pair lighetest and heaviest

        people.sort((a,b) => a - b );

        let numOfBoats = 0;
        let left = 0;
        let right = people.length - 1;

        while(left <= right) {
            // New boat required
            numOfBoats++;

            let remainingBoatCapacity = limit - people[right];
            right--;

            if(remainingBoatCapacity >= people[left]) {
                left++;
            }
        }

        return numOfBoats;
    }
}
