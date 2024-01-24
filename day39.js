// this is brute force solution will pass all the test cases but not a optimal solution

const subsets = nums => {
  var res = [];
  helper(nums, res, [], 0);
  return res;
};

var helper = function (nums, res, arr, start) {
  var len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
};

// this is optimal solution with less time complexity
const subsetsOptimal = nums => {
  function findSubset(array, subset) {
    result.push([...subset]);
    for (let i = 0; i < array.length; i++) {
      subset.push(array[i]);
      findSubset(array.slice(i + 1), subset);
      subset.pop();
    }
  }
  let result = [];
  findSubset(nums, []);
  return result;
};
