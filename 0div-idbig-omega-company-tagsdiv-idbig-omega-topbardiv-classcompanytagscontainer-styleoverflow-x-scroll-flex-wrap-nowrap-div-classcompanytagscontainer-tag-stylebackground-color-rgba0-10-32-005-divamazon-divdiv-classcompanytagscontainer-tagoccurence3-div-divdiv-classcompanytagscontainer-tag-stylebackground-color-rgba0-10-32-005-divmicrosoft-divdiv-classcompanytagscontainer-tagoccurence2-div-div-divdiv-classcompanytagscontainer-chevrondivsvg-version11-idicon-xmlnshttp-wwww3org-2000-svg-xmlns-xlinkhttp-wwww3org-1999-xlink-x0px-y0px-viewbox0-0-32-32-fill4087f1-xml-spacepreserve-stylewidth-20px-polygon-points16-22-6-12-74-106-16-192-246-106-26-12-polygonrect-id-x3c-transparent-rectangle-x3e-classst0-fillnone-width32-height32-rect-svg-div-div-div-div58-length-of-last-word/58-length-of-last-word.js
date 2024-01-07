/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 0) {
        return 0;
    } else {
        const words = s.trim().split(' ');
        const lengthOfLastWord = words[words.length - 1].length;
        return lengthOfLastWord;
    }
};
