var merge = function (intervals) {
  var len = intervals.length;
  var res = [];
  var a = null;
  var b = null;

  intervals.sort((c, d) => c.start - d.start);

  for (var i = 0; i < len; i++) {
    a = res[res.length - 1];
    b = intervals[i];
    if (overlap(a, b)) {
      a.start = Math.min(a.start, b.start);
      a.end = Math.max(a.end, b.end);
    } else {
      res.push(new Interval(b.start, b.end));
    }
  }

  return res;
};

var overlap = function (a, b) {
  if (!a || !b) return false;
  if (b.start <= a.end && a.end <= b.end) return true;
  if (a.start <= b.end && b.end <= a.end) return true;
  return false;
};
