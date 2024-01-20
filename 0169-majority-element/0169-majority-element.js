/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      let obj={};
    let max=Number.MIN_VALUE;
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]=obj[nums[i]]+1;
        }
    }
    for(let key in obj){
        if(obj[key]>nums.length/2){
            max=key
        }
    }
    return max;
};