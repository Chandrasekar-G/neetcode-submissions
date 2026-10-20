class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = Array.from({length: ROWS}, () => Array(COLS).fill(false));

        function dfs(i, j) {
            if(
                i < 0 || i >= ROWS || 
                j < 0 || j >= COLS ||
                grid[i][j] === 0
            ) return 1;

            if(visited[i][j] == true) return 0;

            visited[i][j] = true;

            return (
                dfs(i+1, j) +
                dfs(i, j+1) + 
                dfs(i-1, j) +
                dfs(i, j-1)
            );
        }

        for(let i=0; i<ROWS; i++) {
            for(let j=0; j<COLS; j++) {
                if(grid[i][j] === 1) {
                    return dfs(i, j);
                }
            }
        }

        return 0;
    }
}
