// this is an optimal solution and pass all the test cases of leetcode

function findMatrix(nums) {
  let ans = [];
  let count = new Array(nums.length + 1).fill(0);

  for (const num of nums) {
    if (++count[num] > ans.length) {
      ans.push([]);
    }
    ans[count[num] - 1].push(num);
  }

  return ans;
}

// Example usage:
// const result = findMatrix([1, 2, 2, 3, 3, 3]);
// console.log(result);
