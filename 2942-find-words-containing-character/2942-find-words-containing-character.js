/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((accumlator,current,index)=>current.includes(x)?[...accumlator,index]:accumlator,[])
};