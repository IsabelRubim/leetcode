/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode.com/problems/subsets/

const populateResults = (num, result) => {
    const len = result.length;

    for (let i = 0; i < len; i++) {
        result.push(result[i].concat([num]))
    }
};

var subsets = function(nums) {   
    if (!nums || nums.length === 0) {
        return [[]];
    }

    let result = [[]];

    for (let i = 0; i < nums.length; i++) {
        populateResults(nums[i], result)
    }

    return result;
};