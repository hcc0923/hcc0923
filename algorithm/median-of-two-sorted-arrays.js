var findMediaSortedArrays = function(num1, num2) {
    const array = num1.concat(num2).sort();
    const length = array.length;
    if (length%2 === 0) {
        return ((array[length/2 - 1] + array[length/2])/2).toFixed(5);
    } else {
        return array[Math.floor(length/2)].toFixed(5)
    }
};
const num1 = [1, 3];
const num2 = [2];
console.log(findMediaSortedArrays(num1, num2));