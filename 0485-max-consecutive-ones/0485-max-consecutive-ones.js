/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sum=0;
    let max=0;
    nums.forEach((item)=>{
        if(item!=1){
            max=max>sum?max:sum;
           sum=0;
        }else{
            sum++;
        }
    });
    max=max>sum?max:sum;
    return max;
};