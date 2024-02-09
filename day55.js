// this is an optimal approach and passing all the test cases of leetcode with tc of n(log2n)
const powerOfTwo = n => {
  return (n & (n - 1)) == 0;
};
console.log(powerOfTwo(8));
console.log(powerOfTwo(5));