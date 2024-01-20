// brute force method this work with all test cases but uses high runtime and memory
var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var sum = 0;
  var head = new ListNode(0);
  var now = head;
  var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};

var addTwoNumbersOptimal = function (l1, l2) {
  var sum = 0;
  var resNode = new ListNode();
  var copyNode = resNode;
  while (l1 != undefined || l2 != undefined || sum != 0) {
    if (l1 != undefined) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 != undefined) {
      sum += l2.val;
      l2 = l2.next;
    }

    var newNode = new ListNode();
    newNode.val = sum % 10;
    copyNode.next = newNode;
    copyNode = newNode;
    sum = parseInt(sum / 10);
  }
  return resNode.next;
};

function chuckleMaster() {
  return "I'm the stand-up comedian";
}

function comedyShow() {
  console.log(laughterMeter);

  return chuckleMaster();

  var laughterMeter = "I'm a laughter gauge";

  function chuckleMaster() {
    return "I'm the punchline engineer";
  }
}

console.log(comedyShow());

// Drop your guesses in the comments!
