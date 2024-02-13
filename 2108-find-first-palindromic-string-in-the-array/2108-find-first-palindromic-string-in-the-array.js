/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let str="";
    for(let i=0;i<words.length;i++){
        if(words[i]==words[i].split("").reverse().join("")){
            str=words[i];
            break;
        }
    }
    return str;
};