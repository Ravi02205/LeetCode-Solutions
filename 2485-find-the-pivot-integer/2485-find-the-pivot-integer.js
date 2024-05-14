/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n==1){
        return 1;
    }
    let num = -1;
    //n to m => ((m - n) / 2 + n) * (m - n + 1)
    let sum1=0;
    let sum2=0; 
    for(let m=1;m<n;m++){
        sum1=((m - 1) / 2 + 1) * (m - 1 + 1);
        sum2=((n - m) / 2 + m) * (n - m + 1);
        if(sum1==sum2){
            num=m;
        }
    }
    return num;
};