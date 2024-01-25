// brute force solution will pass all the test cases but not a optimal solution

const singleNumberII = nums => {
  var res = [];
  nums.sort((a, b) => a - b);
  helper(nums, 0, res, []);
  return res;
};

var helper = function (nums, start, res, now) {
  res.push(Array.from(now));

  for (var i = start; i < nums.length; i++) {
    if (i === start || nums[i] !== nums[i - 1]) {
      now.push(nums[i]);
      helper(nums, i + 1, res, now);
      now.pop();
    }
  }
};

const subsets2Otpimal = nums => {
  nums.sort((a, b) => a - b);
  const result = [];

  function backtrack(start, path) {
    result.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);

  return result;
};
