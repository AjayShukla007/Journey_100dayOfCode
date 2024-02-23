// A Simple Javascript program to compute
// sum of bitwise OR of all pairs

// Returns sum of bitwise OR
// of all pairs
const pairORSum = (arr, n) => {
  let ans = 0;

  // Consider all pairs (arr[i], arr[j) such that

  // i < j

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) ans += arr[i] ^ arr[j];

  return ans;
};

// Driver program to test above function
let arr = [5, 9, 7, 6];
let n = arr.length;
console.log(pairORSum(arr, n));


