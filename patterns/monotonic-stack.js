/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = Array(temperatures.length).fill(0); 
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return answer;
};

// https://leetcode.com/problems/132-pattern/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    // Brute force - time limit exceeded
    // if (!nums.length) return false;
	
	// for (let i = 0; i < nums.length - 2; i++) {
	// 	for (let j = i + 1; j < nums.length - 1; j++) { 
	// 		for (let k = j + 1; k < nums.length; k++) { 
	// 			if (nums[i] < nums[k] && nums[k] < nums[j]) {
    //                 return true;
	// 			}
	// 		}
	// 	}
	// }

    // return false;

    let least = -Infinity;

    const aux = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < least) return true;

        while (aux.length > 0 && nums[i] > aux[aux.length - 1]) {
            least = aux.pop();
        }

        aux.push(nums[i]);
    }

    return false;
};