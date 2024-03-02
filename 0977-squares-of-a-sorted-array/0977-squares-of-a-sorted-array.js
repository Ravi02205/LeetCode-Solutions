/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.forEach((item,i)=>{
        nums[i]=nums[i]*nums[i];
    });
    return nums.sort((a,b)=>a-b);
};