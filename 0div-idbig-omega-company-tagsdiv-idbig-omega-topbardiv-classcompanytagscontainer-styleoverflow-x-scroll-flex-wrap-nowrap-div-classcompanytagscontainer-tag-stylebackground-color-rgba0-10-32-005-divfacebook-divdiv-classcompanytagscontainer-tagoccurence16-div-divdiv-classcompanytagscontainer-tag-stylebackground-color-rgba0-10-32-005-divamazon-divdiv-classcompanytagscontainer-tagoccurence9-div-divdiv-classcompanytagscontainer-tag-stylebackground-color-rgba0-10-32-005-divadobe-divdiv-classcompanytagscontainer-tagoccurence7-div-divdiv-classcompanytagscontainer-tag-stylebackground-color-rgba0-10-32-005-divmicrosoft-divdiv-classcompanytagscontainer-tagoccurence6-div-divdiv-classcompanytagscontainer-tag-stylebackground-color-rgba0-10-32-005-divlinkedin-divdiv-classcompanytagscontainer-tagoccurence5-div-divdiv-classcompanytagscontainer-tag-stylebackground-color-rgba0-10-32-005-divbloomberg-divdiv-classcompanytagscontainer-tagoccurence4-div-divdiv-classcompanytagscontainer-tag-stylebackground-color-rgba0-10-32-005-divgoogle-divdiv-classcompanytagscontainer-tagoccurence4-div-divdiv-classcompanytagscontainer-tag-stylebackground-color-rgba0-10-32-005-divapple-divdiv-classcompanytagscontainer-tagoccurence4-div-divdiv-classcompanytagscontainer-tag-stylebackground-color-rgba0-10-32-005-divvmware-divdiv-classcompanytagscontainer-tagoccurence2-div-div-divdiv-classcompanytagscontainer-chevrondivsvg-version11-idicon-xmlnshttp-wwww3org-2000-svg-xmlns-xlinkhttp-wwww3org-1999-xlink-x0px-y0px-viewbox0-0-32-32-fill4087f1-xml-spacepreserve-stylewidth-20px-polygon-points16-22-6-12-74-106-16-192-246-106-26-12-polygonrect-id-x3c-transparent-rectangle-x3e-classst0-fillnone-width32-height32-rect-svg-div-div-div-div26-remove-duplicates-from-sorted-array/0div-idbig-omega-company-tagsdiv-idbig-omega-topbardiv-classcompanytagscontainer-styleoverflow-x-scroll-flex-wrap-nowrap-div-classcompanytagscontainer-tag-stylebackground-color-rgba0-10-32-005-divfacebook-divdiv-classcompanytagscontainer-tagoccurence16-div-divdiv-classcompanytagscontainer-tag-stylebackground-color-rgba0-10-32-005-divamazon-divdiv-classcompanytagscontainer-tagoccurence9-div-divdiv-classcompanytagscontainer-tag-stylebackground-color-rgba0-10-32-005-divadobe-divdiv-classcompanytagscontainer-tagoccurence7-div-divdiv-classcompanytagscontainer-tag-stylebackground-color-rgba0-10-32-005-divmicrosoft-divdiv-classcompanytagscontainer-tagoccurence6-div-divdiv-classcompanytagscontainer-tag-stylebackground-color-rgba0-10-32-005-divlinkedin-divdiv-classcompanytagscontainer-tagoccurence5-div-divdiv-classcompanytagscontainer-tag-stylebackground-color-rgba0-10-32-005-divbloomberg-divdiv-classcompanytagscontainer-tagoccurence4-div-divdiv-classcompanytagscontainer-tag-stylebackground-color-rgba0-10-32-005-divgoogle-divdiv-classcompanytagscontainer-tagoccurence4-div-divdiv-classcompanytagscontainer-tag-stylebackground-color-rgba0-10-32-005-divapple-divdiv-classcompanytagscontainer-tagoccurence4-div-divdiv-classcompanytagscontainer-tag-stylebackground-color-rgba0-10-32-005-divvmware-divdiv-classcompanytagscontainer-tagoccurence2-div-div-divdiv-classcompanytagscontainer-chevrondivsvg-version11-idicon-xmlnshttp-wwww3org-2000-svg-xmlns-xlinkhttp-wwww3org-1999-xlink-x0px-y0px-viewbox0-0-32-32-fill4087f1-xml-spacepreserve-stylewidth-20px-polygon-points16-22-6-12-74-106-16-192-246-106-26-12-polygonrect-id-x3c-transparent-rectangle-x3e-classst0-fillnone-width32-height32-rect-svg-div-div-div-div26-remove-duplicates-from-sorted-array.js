/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = [...new Set(nums)];
    k.forEach((item,index)=>nums[index]=item);
    return k.length;
};