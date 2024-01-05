/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordArray=s.split(' ');
    let index=wordArray.length-1;
    while(wordArray[index]==''){
        index--;
    }
    return index==-1?0:wordArray[index].length;
};