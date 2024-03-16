// this is an optimal solution and pass all the test cases of leetcode

function maxOperations(nums) {
  const n = nums.length;
  const dp = new Map();
  const solve = (i, j, prev) => {
    if (j - i + 1 < 2) {
      //Length can't be less than 2
      return 0;
    }
    let pos = i + "-" + j + "-" + prev;
    if (dp.has(pos)) {
      return dp.get(pos);
    }
    const front =
      prev != nums[i] + nums[i + 1]
        ? 0
        : 1 + solve(i + 2, j, nums[i] + nums[i + 1]);
    const end =
      prev != nums[j] + nums[j - 1]
        ? 0
        : 1 + solve(i, j - 2, nums[j] + nums[j - 1]);
    const both =
      prev != nums[i] + nums[j]
        ? 0
        : 1 + solve(i + 1, j - 1, nums[i] + nums[j]);

    const ans = Math.max(front, end, both);

    dp.set(pos, ans);
    return ans;
  };

  const front = solve(2, n - 1, nums[0] + nums[1]);
  const end = solve(0, n - 3, nums[n - 1] + nums[n - 2]);
  const both = solve(1, n - 2, nums[0] + nums[n - 1]);

  return 1 + Math.max(front, end, both);
}
