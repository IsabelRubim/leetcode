/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/palindromic-substrings/description

var countSubstrings = function(s) {
    let count = 0;

    const helper = (s, left, right) => {
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            count += 1;
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        helper(s, i, i);
        helper(s, i, i + 1);
    }

    return count;
};