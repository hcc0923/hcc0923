var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let left = 0;
    let right = 0;
    let length = 0;
    const set = new Set();
    while (left < s.length && right < s.length) {
        if (set.has(s.charAt([right]))) {
            set.delete(s.charAt([left++]));
        } else {
            set.add(s.charAt([right++]));
        }
        if (set.size > length) {
            length = set.size;
        }
    }
    return length;
};
const s = 'pwwkew';
console.log(lengthOfLongestSubstring(s));