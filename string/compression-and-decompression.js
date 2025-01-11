const compressionAndDecompression = (string) => {
    let stack = [];
    let currentString = '';
    let currentNumber = 0;

    for (let char of string) {
        if (!isNaN(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push([currentString, currentNumber]);
            currentString = '';
            currentNumber = 0;
        } else if (char === ']') {
            let [prevString, repeatTimes] = stack.pop();
            currentString = prevString + currentString.repeat(repeatTimes);
        } else {
            currentString += char;
        }
    }

    return currentString;
}

const string = '3[abc]4[ab]c';

console.log(compressionAndDecompression(string));