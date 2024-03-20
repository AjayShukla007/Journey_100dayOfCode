// this is an optimal solution and pass all the test cases of leetcode

function maxScore(nums, x) {
  // dp0 := the maximum score so far with `nums` ending in an even number
  let dp0 = nums[0] - (nums[0] % 2 === 1 ? x : 0);
  // dp1 := the maximum score so far with `nums` ending in an odd number
  let dp1 = nums[0] - (nums[0] % 2 === 0 ? x : 0);

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] % 2 === 0) {
      dp0 = nums[i] + Math.max(dp0, dp1 - x);
    } else {
      dp1 = nums[i] + Math.max(dp1, dp0 - x);
    }
  }

  return Math.max(dp0, dp1);
}

// Example usage:
// const result = maxScore([1, 2, 3, 4, 5], 3);
// console.log(result);