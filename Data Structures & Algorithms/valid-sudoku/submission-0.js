class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = Array.from({
            length: 9
        }, () => new Set());
        const colMap = Array.from({
            length: 9
        }, () => new Set());
        const boxMap = Array.from({
            length: 9
        }, () => new Set());

        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                const num = board[i][j];

                if(num === ".") continue;

                const box = Math.floor(i/3) * 3 + Math.floor(j/3);

                if(rowMap[i].has(num) || colMap[j].has(num) || boxMap[box].has(num)) {
                    return false;
                } else {
                    rowMap[i].add(num);
                    colMap[j].add(num);
                    boxMap[box].add(num);
                }
            }
        }
        return true;
    }
}
