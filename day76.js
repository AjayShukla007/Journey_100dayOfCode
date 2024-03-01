// this is an optimal solution and will pass all the test cases
const hasTrailingZeros = nums => {
  let cnt = 0;
  for (const x of nums) {
    cnt += (x & 1) ^ 1;
  }
  return cnt >= 2;
};
