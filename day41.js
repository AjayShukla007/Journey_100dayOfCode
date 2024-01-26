
function moveZeroes(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
     nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
   }
 return nums
}

// more optimal solution
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
