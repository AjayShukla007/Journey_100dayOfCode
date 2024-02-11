/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var res = [];
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 60; j++) {
      if (numberOfDigit(i) + numberOfDigit(j) === num) {
        res.push(i + ':' + (j < 10 ? ('0' + j) : j));
      }
    }
  }
  return res;
};

var numberOfDigit = function (num) {
  var n = 0;
  var tmp = 0;
  for (var i = 5; i >= 0; i--) {
    tmp = 1 << i;
    if (num >= tmp) {
      n++;
      num -= tmp;
    }
  }
  return n;
};