var maxSubArray = function(nums) {
    let max = nums[0];
    for (let index = 1; index < nums.length; index++) {
        nums[index] = Math.max(nums[index], nums[index] + nums[index - 1]);
        max = Math.max(max, nums[index]);
    }
    return max;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));