class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        /**
         * Create two 2D arrays to - every cell will indicate wheather it can reach the ocean
         *  
         * Pacific DFS -> From top and left
         * Atlantic DFS -> From right and bottom
         */

        const rows = heights.length;
        const cols = heights[0].length;

        // Create a 2D array to store the result of pacific and atlantic
        const pacific = Array.from({length:rows}, () => new Array(cols).fill(false));
        const atlantic = Array.from({length:rows}, () => new Array(cols).fill(false));

        // DFS

        function dfs(row, col, visited) {
            if(visited[row][col]) return;

            visited[row][col] = true;

            // Check if the current cell's val is lower than new cells val
            if(row>0 && heights[row-1][col] >= heights[row][col]) 
                // UP
                dfs(row-1, col, visited);

            if(col<cols-1 && heights[row][col+1] >= heights[row][col])
                // RIGHT
                dfs(row, col+1, visited);

            
            if(row<rows-1 && heights[row+1][col] >= heights[row][col])
                // DOWN
                dfs(row+1, col, visited);

            if(col>0 && heights[row][col-1] >= heights[row][col])
                // LEFT
                dfs(row, col-1, visited);
        }

        // Pacific -> DFS from top (row -> 0, cols) and left (rows, col ->0)
        for(let col=0; col<cols; col++) 
            dfs(0, col, pacific);
        
        for(let row=0; row<rows; row++)
            dfs(row, 0, pacific);

        // Atlantic -> DFS from bottom (row -> rows-1, cols) and right (rows, col -> cols-1)
        for(let row=0; row<rows; row++)
            dfs(row, cols-1, atlantic);

        for(let col=0; col<cols; col++) 
            dfs(rows-1, col, atlantic);

        // Result - if a cell can reach both pacific and atlantic add them to the result

        const result = [];

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(pacific[i][j] && atlantic[i][j]) {
                    result.push([i,j]);
                }
            }
        }

        return result;
    }
}
