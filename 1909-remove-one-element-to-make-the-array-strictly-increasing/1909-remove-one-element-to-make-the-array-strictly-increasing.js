/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length && count < 2; ++i) {
        if (nums[i - 1] >= nums[i]) {
            ++count;
            if (i > 1 && nums[i - 2] >= nums[i]){
                nums[i] = nums[i - 1];   
            }
        }
    }
    return count < 2;
};