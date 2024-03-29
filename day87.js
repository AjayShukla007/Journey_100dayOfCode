// this is an optimal solution and pass all the test cased and beats 100% in memory and runtime on march 12 2024 at 14:45 
function smallestSubarrays(nums) {
  const n = nums.length;
  const f = new Array(32).fill(-1);
  const ans = new Array(n);

  for (let i = n - 1; i >= 0; --i) {
    let t = 1;

    for (let j = 0; j < 32; ++j) {
      if ((nums[i] >> j) & 1) {
        f[j] = i;
      } else if (f[j] !== -1) {
        t = Math.max(t, f[j] - i + 1);
      }
    }

    ans[i] = t;
  }

  return ans;
}

// Example usage:
// const result = smallestSubarrays([4, 3, 2, 6, 8]);
// console.log(result);
