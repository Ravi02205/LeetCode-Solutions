/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1;
    let prev2 = 1;
    // Running for loop to count all possible ways
    for (let i = 2; i <= n; i++) {
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
};