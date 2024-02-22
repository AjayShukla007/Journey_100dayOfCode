// brute force not work on all test cases of leetcode
const minFlips = (a, b, c) => {
  let kMaxBit = 30;
  let ans = 0;
  for (let i = 0; i < kMaxBit; i++) {
    if (((c >> i) & 1) == 1) {
      ans += ((a >> i) & 1) == 0 && ((b >> i) & 1) == 0 ? 1 : 0;
    } else if (((c >> i) & 1) == 1) {
      ans += (((a >> i) & 1) == 1 ? 1 : 0) + (((b >> i) & 1) == 1 ? 1 : 0);
    }
  }
  return ans;
};

console.log(minFlips(2, 6, 5));

const minFlips2 = (a, b, c) => {
  o = 0;
  for (let i = 0; i < 32; i++) {
    let cbit = (c >> i) & 1;
    let abit = (a >> i) & 1,
      bbit = (b >> i) & 1;
    let v = abit || bbit;
    if (cbit === v) continue;
    o += cbit == 1 ? 1 : abit + bbit;
  }
  return o;
};
