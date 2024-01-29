/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    var map = new Map();
    var res = [];
    var max = -Infinity;
    for (i = 0; i < intervals.length; i++) {
        map.set(intervals[i][0], i);
        max = Math.max(intervals[i][0], max);
    }
    for (i = 0; i < intervals.length; i++) {
        if (intervals[i][1] > max) {
            res.push(-1);
        } else {
            temp = intervals[i][1];
            while (map.get(temp) === undefined) temp++;
            res.push(map.get(temp));
        }
    }
    return res;
};