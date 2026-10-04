class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Do Binary search
        let left = 0;
        let right = (rows * cols) - 1;

        while (left <= right) {
            const mid = Math.floor((left+right)/2);

            // Convert 1D index to row and cols
            /**
             * matrix =
                [   [1,  3,  5,  7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 60]
                ]
                There are: 3 rows × 4 columns = 12 elements
                
                We pretend they're:
                index:  0   1   2   3   4   5   6   7   8   9   10  11
                value:  1   3   5   7  10  11  16  20  23  30  34  60

                If: mid = 6
                we need to find where index 6 lives in the actual matrix.

                Row -> mid/cols -> Math.floor(6 / 4) = 1
                Column -> mid % cols -> 6 % 4 = 2
            */
            const row = Math.floor(mid/cols);
            const col = mid % cols;
            const val = matrix[row][col];

            if(val == target) return true;
            else if (val > target)  right = mid - 1;  
            else if (val < target)  left = mid + 1;
        }

        return false;
    }
}
