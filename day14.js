function fourSum(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left1 = i + 1;

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


// optimal approach O(n+2) tc
function pickingNumbers(a) {
  let countNums = new Map();
  for (let num of a) {
    countNums.set(num, (countNums.get(num) || 0) + 1);
  }
  let maxnum = 0;
  for (let i = 1; i <= 100; i++) {
    maxnum = Math.max(
      maxnum,
      (countNums.get(i) || 0) + (countNums.get(i + 1) || 0)
    );
  }

  return maxnum;
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));