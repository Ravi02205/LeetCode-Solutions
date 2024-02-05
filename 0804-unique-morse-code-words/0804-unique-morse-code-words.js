/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let res=[];
    let mapping=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    words.forEach(item =>{
        let it='';
        item.split('').forEach(itemchar=>it+=mapping[itemchar.charCodeAt(0)-97]);
        if(res.indexOf(it)==-1){
            res.push(it);
        }
    })
    return res.length;
};