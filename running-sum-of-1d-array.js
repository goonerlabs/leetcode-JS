/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const arr = [];
    arr[0] = nums[0];

    for (let i = 1; i < nums.length; i++){
        arr[i] = arr[i - 1] + nums[i];
    }

    return arr
};
