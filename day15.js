function searchinRotatedSortedArray(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] >= nums[left]) {
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log(searchinRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4

function searchinRotatedSortedArray2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]===target) {
      return i;
    }
  }
  return -1;
}
console.log(searchinRotatedSortedArray2([4, 5, 6, 7, 0, 1, 2], 0)); // 4