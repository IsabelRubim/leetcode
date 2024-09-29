/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    if (strs.length <= 1) return [strs];

    const containsLetters = {};

    for (let s of strs) {
        const letters = s.split('').sort().join('');

        if (!containsLetters[letters]) {
            containsLetters[letters] = [s];            
        } else {
            containsLetters[letters].push(s);
        }
    }

    return Object.values(containsLetters);
};