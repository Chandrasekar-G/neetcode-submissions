class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let token of tokens) {

            if(!isNaN(token)) {
                stack.push(Number(token));
                continue;
            }
            const num1 = stack.pop();
            const num2 = stack.pop();
            let result;
            switch(token) {
                case "+":
                    result = num1+num2;
                    break;
                case "-": 
                    result = num2-num1;
                    break;
                case "*": 
                    result = num1 * num2;
                    break;
                case "/": 
                    result = Math.trunc(num2/num1);
                    break;
            }
            stack.push(result);

        }

        return stack[0];
    }
}
