/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let arr = (num+'').split('');
    return arr.reduce((acc,item)=>{
        if(num%item == 0){
            acc=acc+1;
        }
        return acc;
    },0);
};