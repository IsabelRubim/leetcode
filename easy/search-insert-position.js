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