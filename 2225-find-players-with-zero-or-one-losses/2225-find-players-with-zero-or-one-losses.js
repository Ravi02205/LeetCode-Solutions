/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let arr=[];
    let result=[[],[]];
    matches.forEach((item,index)=>{
        if(!arr[item[0]-1]){
            arr[item[0]-1]=0;
        }
        if(!arr[item[1]-1]){
            arr[item[1]-1]=0;
        }
        arr[item[1]-1]++;
    });
    console.log(arr);
    arr.forEach((item,index)=>{
        if(item==0){
            result[0].push(index+1);
        }if(item==1){
            result[1].push(index+1);
        }
    })
    return result;
};