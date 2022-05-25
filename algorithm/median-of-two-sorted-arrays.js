var findMediaSortedArrays = function(nums1, nums2) {
    const array = nums1.concat(nums2).sort((a, b) => a-b);
    const length = array.length;
    if (length%2 === 0) {
        return ((array[length/2 - 1] + array[length/2])/2).toFixed(5);
    } else {
        return array[Math.floor(length/2)].toFixed(5)
    }
};
const nums1 = [3];
const nums2 = [-2,-1];
console.log(findMediaSortedArrays(nums1, nums2));