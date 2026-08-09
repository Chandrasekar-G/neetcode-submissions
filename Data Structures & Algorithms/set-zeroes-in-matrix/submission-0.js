class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const zeroRows = new Set();
        const zeroCols = new Set();

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(matrix[i][j] === 0) {
                    zeroRows.add(i);
                    zeroCols.add(j);
                }
            }
        }

        // Set Entire row as 0
        for(const row of zeroRows) {
            for(let col=0; col<cols; col++) {
                matrix[row][col] = 0;
            }
        }

        // Set Entire col as 0
        for(const col of zeroCols) {
            for(let row=0; row<rows; row++) {
                matrix[row][col] = 0;
            }
        }

        return matrix;
    }
}
