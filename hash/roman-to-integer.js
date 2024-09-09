/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;

   for (i = 0; i < s.length; i++) {
        let current = dictionary[s[i]];
        let next = dictionary[s[i + 1]];

        if (current < next) {
            sum -= current;
        } else {
            sum += current
        }
    }

    return sum;
};