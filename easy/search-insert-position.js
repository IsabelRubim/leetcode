/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let foundTarget = nums.findIndex((num) => num === target);

    if (foundTarget === -1) {
        const aux = [...nums];
        aux.push(target);

        foundTarget = aux.sort((a,b) => a - b).findIndex(num => num === target);
    }

    return foundTarget;
};

console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4 
console.log(searchInsert([3,5,7,9,10], 8)) // 3

