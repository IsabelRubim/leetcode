/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(' ');

    if (words.length == 1) {
        return s.substring(0, s.length - 1)
    };

    let arr = new Array(words.length).fill('');



    for (let i = 0; i < words.length; i++) {
        let position = words[i].substring(words[i].length - 1);

        arr[position - 1] = words[i].substring(0, words[i].length - 1);
    }

    return arr.join(' ');
};

console.log(sortSentence("is2 sentence4 This1 a3")) // This is a sentence