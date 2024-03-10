/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let newNum1=[...(new Set([...nums1]))];
    let newNum2=[...new Set([...nums2])];
    let [min,max]=newNum1.length>newNum2.length?[newNum2,newNum1]:[newNum1,newNum2];
    let res=[];
    for(let i of min){
        if(max.includes(i)){
            res.push(i);
        }
    }
    return res;
};