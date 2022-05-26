function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);    
}
const node = new ListNode();
console.log(node);
var addTwoNumbers = function(l1, l2) {
    let n1 = '';
    let n2 = '';
    let n = 0;
    while (l1 !== null) {
        n1 += l1.val;
    }
    while (l2 !== null) {
        n2 += l2.val
    }
    n1 = n1.toString().reverse();
    n2 = n2.toString().reverse();
    n = Number(n1) + Number(n2); 
    n = n.toString().reverse();
    const result = new ListNode(n[0], n[1]);
    for (let index = 1; index < n.length; index++) {
        result.val = n[index];
        if (index + 1 === n.length) {
            result.next = null;
        } else {
            result.next = n[index + 1];
        }
    }
    return result;
}
var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));