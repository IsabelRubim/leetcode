/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const dictionary = {
        a: 'A',
        e: 'E',
        i: 'I',
        o: 'O',
        u: 'U',
    };

    const vowels = [];
    const isVowels = (char) => Object.keys(dictionary).includes(char) || Object.values(dictionary).includes(char);

    for (let char of s) {
        if (isVowels(char)) {
            vowels.push(char);
        }
    }
    
    vowels.sort();

    let answer = '';
    let index = 0;

    for (let char of s) {
        if (isVowels(char)) {
            answer += vowels[index];
            index++;
        } else {
            answer += char;
        }
    }

    return answer;
};