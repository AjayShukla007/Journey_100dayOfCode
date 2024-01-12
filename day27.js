var findMin = function (nums) {
  if (nums.length === 0) return undefined;
  var minEle = nums[0];
  if (nums.length === 1) {
    minEle = nums[0];
    return minEle;
  }
  var start = 0;
  var end = nums.length - 1;
  if (nums[end] > nums[start]) {
    end = Math.floor(end / 2);
  } else {
    start = Math.ceil(end / 2);
  }
  return findMin(nums.slice(start, end + 1));
};

console.log(findMin([3,2,1,4,5]));
