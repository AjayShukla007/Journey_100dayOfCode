function fourSum(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left1 = i + 1;

    // while(left1<nums.length-1){
    for (var j = left1; j < nums.length; j++) {
      if (j > left1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (nums[left] == nums[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  return result;
}
let nums = [1, 0, -1, 0, -2, 2],
  target = 0;

console.log(fourSum(nums, target));
