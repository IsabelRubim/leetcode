/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (token of tokens) {
        if (!isNaN(token)) {
           stack.push(+token);
        } else {
            let number1 = stack.pop();
            let number2 = stack.pop();
        
            switch (token) {
                case '+':
                    stack.push(number2 + number1);
                    break;
                case '*':
                    stack.push(number2 * number1);
                    break;
                case '/':
                    stack.push((number2 / number1) | 0);
                    break;
                case '-':
                    stack.push(number2 - number1); 
                    break;
            }
        }      
    }
  
    return stack.pop();
};