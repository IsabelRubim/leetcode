/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   return s.trim().split(' ').splice(-1).join('').length;
};

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6

