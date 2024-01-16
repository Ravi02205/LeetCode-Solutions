/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let counter = 0;

    for(let i = 0;i<nums.length - 1;i++){
        const [curr,next] = [nums[i],[nums[i+1]]]
        // check asc
        if(next >= curr){

        }else{
        if(counter==1){
            return false
        }
            counter++

        }
    }

    if (nums[nums.length - 1] > nums[0]){
            counter++
    }

    return counter <= 1
};
