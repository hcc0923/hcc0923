var isValid = function(s) {
    const stack = [];
    for (let index = 0; index < s.length; index++) {
        switch (s[index]) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (stack[index] !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};
const s = "()[]{}";
console.log(isValid(s));