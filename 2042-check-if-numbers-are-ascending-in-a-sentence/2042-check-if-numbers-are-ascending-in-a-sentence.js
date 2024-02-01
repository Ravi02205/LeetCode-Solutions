/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    return s.match(/\d+/g).every((_, index, arr) => (index < arr.length - 1 ? arr[index + 1] - arr[index] > 0 : true));
};