class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        /**
          First Transpose the matrix ( swap rows and cols )
            1 2 3        1 4 7 
            4 5 6   →    2 5 8
            7 8 9        3 6 9

            (0,0) => (0,0)
            (0,1) => (1,0)
            (0,2) => (2,0)
          
        and then reverse the rows 

            1 4 7        7 4 1
            2 5 8   →    8 5 2
            3 6 9        9 6 3
         */

        const rows = matrix.length;
        const cols = matrix[0].length;

        // Transpose
        for(let i=0; i<rows; i++) {
            for(let j=i+1; j<cols; j++) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Reverse
        for(let row = 0; row<rows; row++) {
            let left = 0;
            let right = rows-1;
            while(left < right) {
                let temp = matrix[row][right];
                matrix[row][right] = matrix[row][left];
                matrix[row][left] = temp;
                left++;
                right--;
            }
            
        }
        return matrix;
    }
}
