var letterCombinations = function(digits) {
    let length = digits.length;
    if (length === 0) return [];
    const map = [,,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    function loop(char, i, str) {

    }
    const result = [];
    for (let index = 0; index < length; index++) {
        let mapItemIndex = Number(digits[index]);
        switch (mapItemIndex) {
            case 2:
                const two = map[mapItemIndex];
                two.forEach((char, i) => {
                    
                })
                return [];
            case 3:
                return [];
            default:
                break;
        }
    }
    return result;
};
const digits = "23";
console.log(letterCombinations(digits));