const moveZeroesOptimal = nums => {
  let count = 0;
  nums.forEach((_, index) => {
    if (nums[index] !== 0) {
      nums[count] = nums[index];
      count++;
    }
  });
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
