var letterCombinations = function(digits) {
    let length = digits.length;
    if (length === 0) return [];
    const letterArray = [,,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
   
    const result = [''];
    for (let i = 0; i < length; i++) {
        const letter = letterArray[digits.charAt(i)]; // 拿出要被组合的单词
        let resultLength = result.length; // 遍历队列
        for (let j = 0; j < resultLength; j++) {
            let firstChar = result.shift(); // 从队列中拿出第一个字符和第二个letter组合
            for (let k = 0; k < letter.length; k++) {
                result.push(firstChar + letter[k]); // 新组装的入队列
            }
        }
    }
    return result;
};
const digits = "23";
console.log(letterCombinations(digits));