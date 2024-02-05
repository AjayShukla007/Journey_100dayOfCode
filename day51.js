// optimal solution and pass all the leetcode test cases
const rangeLeftAndRight = (left, right) => {
  let shiftcount = 0;

  while (left != right && left > 0) {
    shiftcount++;
    left = left >> 1;
    right = right >> 1;
  }

  return left << shiftcount;
};
