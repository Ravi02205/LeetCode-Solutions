/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  let result = [];

    nums.sort((a,b) => a-b).forEach((item, idx) => {
        if(item === target){
            result.push(idx);
        }
    })
    return result
    
};