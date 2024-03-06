/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/ig, el=> vow.pop());
};