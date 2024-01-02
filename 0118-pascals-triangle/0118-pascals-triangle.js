/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    let arr=[];
    for(let i=1; i<=numRows; i++) {
        arr.push(new Array(i).fill(0));
    }
    arr[0][0] = 1;
    for(let i=0; i<numRows-1; i++) {
        for(let j=0; j<=i; j++) {
            arr[i+1][j] = arr[i+1][j] + arr[i][j];
            arr[i+1][j+1] = arr[i+1][j+1] + arr[i][j];
        }
    }
    return arr;
};