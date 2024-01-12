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
/// this will pass all the test cases
var findMinAll = function (arr) {
    let min_ele = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min_ele) {
            min_ele = arr[i];
        }
    }
    return min_ele;
};


console.log(findMin([3,2,1,4,5]));
console.log(findMinAll([3,2,1,4,5]));
