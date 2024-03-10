/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let count = 0
    let max = 0
    
    for(let i of rectangles){
        let side = Math.min(i[0], i[1])
        if(side > max){
            max = side
            count = 1
        } else if(side == max) {
            count++
        }
    }
    return count
};