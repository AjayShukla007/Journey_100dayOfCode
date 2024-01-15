
var insert = function (intervals, newInterval) {
    const res = [];
    let [mStart, mEnd] = newInterval;
    let pushed = false;

    for (let [start, end] of intervals) {
        if (end < mStart) {
            res.push([start, end]);
        } else if (start > mEnd) {
            if (!pushed) res.push([mStart, mEnd]);
            pushed = true;
            res.push([start, end]);
        } else {
            mStart = Math.min(start, mStart);
            mEnd = Math.max(end, mEnd);
        }
    }

    if (!pushed) res.push([mStart, mEnd]);
    return res;
};