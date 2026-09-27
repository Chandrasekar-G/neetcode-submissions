class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        function dfs(row, col) {
            if(
                row < 0 ||
                row >= rows || 
                col < 0 ||
                col >= cols
                ) return;
            
            // Only process 0's
            if(board[row][col] !== "O") return;

            board[row][col] = "S";

            dfs(row-1, col);
            dfs(row+1, col);
            dfs(row, col+1);
            dfs(row, col-1);
        }

        // Start DFS from Borders
        // Top and bottom. Row - > 0 and rows-1
        for(let col=0; col<cols; col++) {
            dfs(0, col);
            dfs(rows-1, col);
        }

        // Left and Right. Col -> 0 and cols-1
        for(let row=0; row<rows; row++) {
            dfs(row, 0);
            dfs(row, cols-1);
        }


        for(let i=0; i< rows; i++) {
            for(let j=0; j<cols; j++) {
                
                // Capture since they're not surrounded by 0s
                if(board[i][j] == "O") {
                    board[i][j] = "X";
                }

                if(board[i][j] == "S") {
                    board[i][j] = "O"
                }
            }
        }
    }
}
