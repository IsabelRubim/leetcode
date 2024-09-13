/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }

    return max / k;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();

    let left = 0;
    let maxSize = 0;

    if (s.length < 2) return s.length;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[i]);

        maxSize = Math.max(maxSize, i - left + 1);
    }

    return maxSize;
};

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const numToString = num.toString();

    let countDivisors = 0;

    for (let i = 0; i <= numToString.length - k; i++) {
        let subNum = parseInt(numToString.slice(i, k + i));

        if (num % subNum === 0) countDivisors++;
    }

    return countDivisors;
};