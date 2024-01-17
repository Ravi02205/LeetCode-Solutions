/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const obj = {};
    arr.forEach(e => {
        obj[e] = (obj[e] || 0) + 1;
    });
    return new Set(Object.keys(obj)).size === new Set(Object.values(obj)).size;
};