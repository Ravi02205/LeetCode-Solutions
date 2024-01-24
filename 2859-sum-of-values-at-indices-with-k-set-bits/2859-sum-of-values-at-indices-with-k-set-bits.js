/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        let count=0;
        dec2bin(i).split('').forEach(item=>{if(item==1)count++})
        if(count==k){
            sum+=nums[i];
        }
    }
    return sum;
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}