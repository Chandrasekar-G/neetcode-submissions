class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        /**
         * Follow DFS
         * If we find a 1 -> Increment the result
         *      Do DFS for sorrounding nos. 
         *      Mark it as 0 (visited)
         * 
         */

        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        function dfs(row, col) {

            // Boundary check
            if (row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols) return;
            
            if(grid[row][col] === "0") return;

            // Mark as visited
            grid[row][col] = "0";

            dfs(row-1, col); // UP
            dfs(row+1, col); // DOWN
            dfs(row, col-1); // LEFT
            dfs(row, col+1); // RIGHT
        }

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(grid[i][j] === "1") {
                    islands++;
                    dfs(i, j);
                }
            }
        }

        return islands;

    }
}
