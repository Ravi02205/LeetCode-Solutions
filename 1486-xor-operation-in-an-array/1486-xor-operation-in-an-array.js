/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let res=start;
    for(let i=1;i<n;i++){
        res=res^start+(i*2)
    }
    return res;
};