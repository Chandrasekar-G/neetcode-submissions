class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if(matrix.length === 0) return [];

        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let left = 0;
        let right = cols-1;
        let bottom = rows-1;

        const result = [];

        while(top <= bottom && left <= right) {
            // Left -> right
            for(let col=left; col<=right; col++) {
                result.push(matrix[top][col]);
            }
            top++;

            // Top -> bottom
            for(let row=top; row<=bottom; row++) {
                result.push(matrix[row][right]);
            }
            right--;

             if (top <= bottom) {

                // right → left
                for (let col = right; col >= left; col--) {
                    result.push(matrix[bottom][col]);
                }

                bottom--;
            }

            if (left <= right) {

                // bottom → top
                for (let row = bottom; row >= top; row--) {
                    result.push(matrix[row][left]);
                }

                left++;
            }
        }
        return result;
    }
}
