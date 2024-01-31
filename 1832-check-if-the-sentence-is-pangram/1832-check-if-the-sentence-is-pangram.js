/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr=[...new Set(sentence.split(''))];
    let chars='abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0;i<chars.length;i++){
        if(arr.indexOf(chars[i])==-1){
            return false;
        }
    }
    return true;
};