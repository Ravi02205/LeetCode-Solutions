/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
     // Separate negative (n) and positive (p) numbers into two arrays
    const n = [];
    const p = [];
    for (const i of nums) {
        if (i < 0) {
            n.push(i);
        } else {
            p.push(i);
        }
    }

   let i = 0, j = 0, k = 0;

     while (i < n.length && j < p.length) {
        if (k % 2 === 0) {
            nums[k] = p[j];
            j++;
        }
        else {
            nums[k] = n[i];
            i++;
        }
        k++;
    }

   while (i < n.length) {
        nums[k] = n[i];
        i++;
        k++;
    }

    while (j < p.length) {
        nums[k] = p[j];
        j++;
        k++;
    }

   return nums;
};