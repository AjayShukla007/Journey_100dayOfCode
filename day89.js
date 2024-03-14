function longestSubarray(nums) {
  const maxValue = Math.max(...nums);
  let longestSubarrayLength = 0;
  let currentSubarrayLength = 0;

  nums.forEach(value => {
    if (value === maxValue) {
      currentSubarrayLength++;
      longestSubarrayLength = Math.max(longestSubarrayLength, currentSubarrayLength);
    } else {
      currentSubarrayLength = 0;
    }
  });

  return longestSubarrayLength;
}

