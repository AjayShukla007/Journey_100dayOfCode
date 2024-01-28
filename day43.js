const getRow = rowInded => {
  var res = [];
  var i = 0;
  var j = 0;
  for (i = 0; i <= rowIndex; i++) {
    res.unshift(1);
    for (j = 1; j < i; j++) {
      res[j] += res[j + 1];
    }
  }
  return res;
};
