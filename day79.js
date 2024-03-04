// this is an optimal solution and pass all the test cases of leetcode
const findKOr = (nums, k) => {
  const kMaxBit = 30;
  let ans = 0;

  for (let i = 0; i <= kMaxBit; ++i) {
    const count = nums.filter(num => ((num >> i) & 1) === 1).length;
    if (count >= k) {
      ans += Math.pow(2, i);
    }
  }

  return ans;
};
