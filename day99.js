function findMatrix(nums) {
  let ans = [];
  let count = new Array(nums.length + 1).fill(0);

  for (const num of nums) {
    if (++count[num] > ans.length) {
      ans.push([]);
    }
    ans[count[num] - 1].push(num);
  }

  return ans;
}
