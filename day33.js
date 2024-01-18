// this is a importent method
var swapPairs = function (head) {
  let recur = function (node) {
    if (!node || node.next === null) {
      return node;
    }
    let firstNode = node;
    let secondNode = node.next;

    let temp = secondNode;
    firstNode.next = recur(secondNode.next);
    temp.next = firstNode;

    return temp;
  };
  return recur(head);
};