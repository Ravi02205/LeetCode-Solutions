/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let result=nums.filter(item=>item!=0);
  for(let i=0;i<nums.length;i++){
      nums[i]=i<result.length ? result[i]:0;
  };
};