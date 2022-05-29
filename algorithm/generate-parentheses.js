var generateParenthesis = function(n) {
    function generate(result, current, open, close, n) {
        if (current.length === n * 2) return result.push(current);
        if (open < n) {
            generate(result, current + "(", open + 1, close, n); // open小于n，则可以继续add左括号
        }
        if (close < open) {
            generate(result, current + ")", open, close + 1, n); // close小于open，可以继续add右括号
        }
    }
    const result = [];
    generate(result, "", 0, 0, n);
    return result;
};
const n = 3;
console.log(generateParenthesis(n));