/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let l = nums.length;
    while (k > l) k = k-l;
    let leTemps = Array.from({ length: k });
    for (let i=0; i<k; i++) leTemps[i] = nums[i+l-k];
    for (let i=nums.length-1; i>=0; i--) {
        if (i < k) {
            nums[i] = leTemps[i];
        } else {
            nums[i] = nums[i-k];
        };
    };
};