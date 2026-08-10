class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        function dfs(row, col, index) {
            if(index === word.length) return true;
            
            if(row < 0 || row >= rows || col < 0 || col >= cols) return false;

            if(board[row][col] !== word[index]) return false;

            const temp = board[row][col];
            board[row][col] = "#";

            const found =   dfs(row-1, col, index + 1) ||     // UP
                            dfs(row, col-1, index + 1) ||     // LEFT
                            dfs(row+1, col, index + 1) ||     // DOWN
                            dfs(row, col+1, index + 1)        // RIGHT 
            board[row][col] = temp;
            return found;
        }

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}
