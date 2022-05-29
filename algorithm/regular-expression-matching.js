var isMatch = function(s, p) {
    return s.match(p);
};
const s = "ab";
const p = ".*";
console.log(isMatch(s, p));