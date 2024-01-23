// ^ can be used in different tasks and make the task simple
const singleNumber = nums => {
  let one = 0;
  let two = 0;
  let len = nums.length;
  for (var i = 0; i < len; i++) {
    one = (one ^ nums[i]) & ~two;
    two = (two ^ nums[i]) & ~one;
  }
  return one;
};
