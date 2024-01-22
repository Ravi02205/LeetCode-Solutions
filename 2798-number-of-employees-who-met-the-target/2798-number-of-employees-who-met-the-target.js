/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.reduce((accum,curr)=>(curr>=target) ? accum+1 : accum , 0);
};