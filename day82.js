// this is an optimal solution and will pass all the test cases
function sumIndicesWithKSetBits(nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (bitCount(i) === k) {
      ans += nums[i];
    }
  }
  return ans;
}

function bitCount(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}
