/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowSet.has(i) || colSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};