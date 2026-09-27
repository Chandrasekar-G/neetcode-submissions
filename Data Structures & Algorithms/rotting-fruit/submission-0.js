class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        const queue = [];
        let freshFruits = 0;
        let minutesElapsed = 0;

        // Add all rotten fruits to queue
        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(grid[i][j] == 2) {
                    queue.push([i, j, 0]);  //  0 represents 0th minute (initial state)
                }

                if(grid[i][j] == 1) {
                    freshFruits++;
                }
            }
        }

        while(queue.length > 0) {
            const [row, col, time] = queue.shift();
            minutesElapsed = Math.max(minutesElapsed, time);

            for(const [rowChange, colChange] of directions) {
                const newRow = row + rowChange;
                const newCol = col + colChange;

                if(
                    newRow >=0 &&
                    newRow < rows &&
                    newCol >=0 &&
                    newCol < cols &&
                    grid[newRow][newCol]==1
                    ) {
                        grid[newRow][newCol] = 2;
                        freshFruits--;
                        queue.push([newRow, newCol, time + 1]);
                    } 
            }
        }

        return freshFruits == 0 ? minutesElapsed : -1;
    }
}
