/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const nullarr = "";
    var length = words.length;
    var rev;

    for(var i =0;i<length;i++){
        function palindrome(word){
            rev = word.split('').reverse().join('')
            return rev;
        }
        palindrome(words[i]);
        if(rev==words[i]){
            return words[i];
        }
    }
    return nullarr;
};