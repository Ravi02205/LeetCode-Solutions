/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min=1000,max=0;
    nums.forEach(item=>{
        if(item<min){
            min=item;
        }
        if(item>max){
            max=item;
        }
    });
     for (let temp = min; min !== 0;) { 
        min = max % min; 
        max = temp; 
        temp = min; 
    } 
    return max; 
};