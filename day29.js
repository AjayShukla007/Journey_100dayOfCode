var findMin = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
};


console.log(findMin([2,2,2,0,1]));