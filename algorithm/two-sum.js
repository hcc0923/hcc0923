// var twoSum = function(nums, target) {
//     for (let index = 0; index < nums.length; index++) {
//         const diff = target - nums[index];
//         if (nums.indexOf(diff)) {
//             return [index, nums.indexOf(diff)];
//         }
//     }
// };
var twoSum = function(nums, target) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        console.log(map.has(diff));
        if (map.has(diff)) {
            return [index, map.get(diff)];
        } 
        map.set(nums[index], index);
    }
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 10;
console.log(twoSum(nums, target));