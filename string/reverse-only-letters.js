/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/reverse-only-letters/description/

const isLetter = (char) => /^[a-zA-Z]+$/.test(char);

var reverseOnlyLetters = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    let strs = [...s];

    while (left < right) {
        if (!isLetter(strs[left])) {
            left++;
        } else if (!isLetter(strs[right])) {
            right--;
        } else {
            let aux = strs[left];
            strs[left] = strs[right];
            strs[right] = aux;
           
            left++;
            right--;
        }
    }
   
    return strs.join('');
};