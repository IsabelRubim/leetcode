/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1;
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= postfix;
        postfix *= nums[j];
    }

    return answer;
};