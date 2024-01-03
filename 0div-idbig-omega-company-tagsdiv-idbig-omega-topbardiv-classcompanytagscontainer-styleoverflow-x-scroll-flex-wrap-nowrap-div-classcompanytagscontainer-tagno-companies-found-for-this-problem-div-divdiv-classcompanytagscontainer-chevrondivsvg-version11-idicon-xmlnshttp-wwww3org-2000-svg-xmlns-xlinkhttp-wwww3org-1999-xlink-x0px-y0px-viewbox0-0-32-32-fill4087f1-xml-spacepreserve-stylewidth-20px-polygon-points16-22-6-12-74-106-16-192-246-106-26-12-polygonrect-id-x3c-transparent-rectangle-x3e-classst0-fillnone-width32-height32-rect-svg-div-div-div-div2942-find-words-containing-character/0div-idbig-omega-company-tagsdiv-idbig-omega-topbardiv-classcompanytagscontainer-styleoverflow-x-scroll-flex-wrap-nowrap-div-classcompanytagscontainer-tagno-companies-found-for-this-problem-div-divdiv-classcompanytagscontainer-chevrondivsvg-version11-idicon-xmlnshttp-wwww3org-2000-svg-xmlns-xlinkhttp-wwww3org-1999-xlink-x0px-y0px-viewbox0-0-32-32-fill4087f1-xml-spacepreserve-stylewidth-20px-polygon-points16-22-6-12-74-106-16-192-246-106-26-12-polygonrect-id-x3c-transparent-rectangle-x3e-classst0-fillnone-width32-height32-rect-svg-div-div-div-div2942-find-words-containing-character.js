/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[];
    words.forEach((item,index)=>{
        if(item.includes(x)){
            result.push(index);
        }
    })
    return result;
};