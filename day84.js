// this is an optimal solution and pass all the leetcode test cases
const maximumXOR = nums => {
  return nums.reduce((a, b) => a | b, 0);
};
