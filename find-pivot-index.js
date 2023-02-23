/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++){
        total += nums[i];
    }

    for (i = 0; i < nums.length; i++){
        if (left * 2 == total - nums[i]){
            return i;
        }
        left += nums[i];
    }
    return -1;
};
