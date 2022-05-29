var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        sum > 0 ? sum += nums[index] : sum = nums[index];
        max = Math.max(max, sum);
    }
    return max;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));