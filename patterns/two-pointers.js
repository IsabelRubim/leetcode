/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.lastIndexOf(numbers[numbers.length - 1]);

    for (num of numbers) {
        let sum = numbers[left] + numbers[right];
   
        if (sum === target) {
            const [firstIndex, secondIndex] = [left + 1, right + 1];
      
            return [firstIndex, secondIndex];
        }

        if (sum < target) left++; 

        if (sum > target) right--;
    }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const phrase = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let left = 0;
    let right = phrase.lastIndexOf(phrase[phrase.length - 1]);

    while (left < phrase.length) {
        if (phrase[left] && phrase[right] && phrase[left] !== phrase[right]) {
            return false;
        }
 
        left++;
        right--;
    }

    return true;
};