/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(char of s) {
        if (Object.values(mapping).includes(char)) {
            stack.push(char);
        } else if (mapping.hasOwnProperty(char)) {
            if (!stack.length || mapping[char] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));