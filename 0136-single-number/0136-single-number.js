/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj={};
    nums.forEach(item=>{
        if(!obj[item]){
            obj[item]=1;
        }else{
            obj[item]++;
        }
    })
    for(let key in obj){
        if(obj[key]===1){
            return key;
        }
    }
};