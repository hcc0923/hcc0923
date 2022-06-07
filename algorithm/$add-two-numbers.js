function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let val = l1.val + l2.val;
    next = addTwoNumbers(l1.next, l2.next);
    if (val >= 10) {
        val -= 10;
        next = addTwoNumbers(next, new ListNode(1));
    }
    return new ListNode(val, next);
}
// var l1 = [2, 4, 3];
// var l2 = [5, 6, 4];
// 输出：[7,0,8]
// 342+465=807
console.log(addTwoNumbers(l1, l2));