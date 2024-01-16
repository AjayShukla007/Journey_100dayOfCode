function mergeOptimul(intervals) {
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [];
  let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  result.push(previous);
  
  return result;
}


// this function is not suited for all test cases of leetcode
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
