/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) return [];

    const dictionary = {};

    for (let i = 0; i <= s.length - 10; i++) {
        const sequence = s.substring(i, i + 10);

        if (!dictionary[sequence]) {
           dictionary[sequence] = 0; 
        } 
        
        dictionary[sequence] += 1;
    }

    return Object.keys(dictionary).filter(key => dictionary[key] > 1);
};