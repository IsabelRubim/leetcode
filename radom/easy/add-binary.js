/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const binaryA = `0b${a}`;
    const binaryB = `0b${b}`;

    const sum = BigInt(binaryA) + BigInt(binaryB);

    return sum.toString(2);
};

console.log(addBinary("11", "1")) // 100
console.log(addBinary("1010", "1011")) // 10101