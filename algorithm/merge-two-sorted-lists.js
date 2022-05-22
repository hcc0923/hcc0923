var mergTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergTwoLists(list1, list2.next);
        return list2;
    }
};
const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
console.log(mergTwoLists(l1, l2));