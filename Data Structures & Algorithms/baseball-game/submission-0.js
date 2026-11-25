class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let result = 0;
        let a, b;

        operations.forEach(operation => {
            console.log(operation, stack);
            switch(operation) {
                case "+" :
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b);
                    stack.push(a);
                    stack.push(Number(a)+Number(b));
                    break;
                case "D" :
                    a = stack.pop();
                    stack.push(a);
                    stack.push(Number(a)*2);
                    break;
                case "C" :
                    stack.pop();
                    break;
                default :
                    stack.push(operation);
                    break;
            }
        });
        
        result = stack.reduce((acc, data) => acc + Number(data),0);
        return result;
    }
}
