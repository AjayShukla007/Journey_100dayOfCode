const singleNumInSortedArray = nums => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let m = Math.round((left + right) / 2);
    if (m && 1) m--;
    if (nums[m] === nums[m + 1]) {
      left = m + 2;
    } else {
      right = m;
    }
  }
  return nums[left];
};

console.log(singleNumInSortedArray([1, 1, 2, 3, 3, 4, 4]));
console.log(singleNumInSortedArray([1, 1, 2, 2, 3, 4, 4]));
