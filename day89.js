// this is an optimal solution and pass all the test cases on leetcode
function longestSubarray(nums) {
  const maxValue = Math.max(...nums);
  let longestSubarrayLength = 0;
  let currentSubarrayLength = 0;

  nums.forEach(value => {
    if (value === maxValue) {
      currentSubarrayLength++;
      longestSubarrayLength = Math.max(
        longestSubarrayLength,
        currentSubarrayLength
      );
    } else {
      currentSubarrayLength = 0;
    }
  });

  return longestSubarrayLength;
}

// const result = longestSubarray([1, 2, 3, 3, 4, 4, 4, 5]);
// console.log(result);
