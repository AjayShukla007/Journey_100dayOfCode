// this is an optimal soltuion and pass all the test cases of leetcode
const evenOddBit = n => {
  const ans = [0, 0];
  let i = 0; // 0 := even, 1 := odd

  while (n > 0) {
    ans[i] += n & 1;
    n >>= 1;
    i ^= 1;
  }

  return ans;
};
