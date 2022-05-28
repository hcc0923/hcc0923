var singleNumbere = function(nums) {
    return nums.reduce((a, b) => a^b);
};
const nums = [4,1,2,1,2];
console.log(singleNumbere(nums));