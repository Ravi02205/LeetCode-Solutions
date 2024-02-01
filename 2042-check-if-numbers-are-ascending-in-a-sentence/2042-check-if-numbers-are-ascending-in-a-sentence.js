/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let arr=s.split(' ').filter(item=>!isNaN(+item));
    let prev=arr.shift();
    let flag=true;
    arr.forEach(item=>{
        console.log(+item<=+prev)
        if(+item<=+prev && flag){
            flag = false;
        }
        prev=+item;
    });
    return flag;
};