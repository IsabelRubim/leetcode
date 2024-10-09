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

// https://leetcode.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    const backTrack = (start, partial) => {

        // All ways is valid, so add the result
        if (partial.length === k) {
            result.push([...partial]);
        }
        
        // Explore all possibilities
        for (let i = start; i >= 1; i--) {
            partial.push(i);
            
            // explore the next way
            backTrack(i - 1, partial);

            partial.pop();
        }
    }

    backTrack(n, []);

    return result;
};

// https://leetcode.com/problems/generate-parentheses/description
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const stack = [];

    const backTrack = (countOpen, countClosed) => {
        
        if (countOpen === n && countClosed === n) {
            result.push(stack.join(''));
            return;
        }
        
        if (countOpen < n) {
            stack.push('(');
            backTrack(countOpen + 1, countClosed);   
            stack.pop();
        }
        
        if (countClosed < countOpen) {
            stack.push(')');
            backTrack(countOpen, countClosed + 1);
            stack.pop();
        }
    }

    backTrack(0, 0);

    return result;
};