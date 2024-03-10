/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let arr=[];
    let max=0;
    let count=0;
    for(let i=0;i<rectangles.length;i++){
        let min=Math.min(rectangles[i][0],rectangles[i][1]);
        arr.push(min);
        if(min>max){
            max=min;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==max){
            count++;
        }
    }
    return count;
};