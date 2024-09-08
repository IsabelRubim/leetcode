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