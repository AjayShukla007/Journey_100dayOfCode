var removeDuplicatesII = function (nums) {
  if (nums.length < 3) return nums.length; // base case
  let idx = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[idx - 2]) {
      nums[idx++] = nums[i];
    }
  }
  return idx;
};

console.log(removeDuplicatesII([1, 1, 1, 2, 2, 3]));
