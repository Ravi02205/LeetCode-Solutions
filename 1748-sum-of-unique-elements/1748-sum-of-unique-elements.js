/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj={};
    nums.forEach((ele)=>{
        if(obj[ele+'']){
            obj[ele+'']=obj[ele+'']+1;
        }else{
            obj[ele+'']=1;
        }
    });
    console.log(obj);
    return nums.reduce((accum,curr)=>{
        if(obj[curr+'']==1){
            accum=accum+curr;
        }
        return accum;
    },0);
};