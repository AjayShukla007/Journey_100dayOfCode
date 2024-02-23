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


//THIS IS THE POPTIMAL SOLUTION AND PASS ALL TEST CASES
// Function to compute the bitwise XOR of all elements in an array
function bitwiseXOROfArray(elements) {
  // Reduce the array by applying the XOR operation between elements
  return elements.reduce((accumulated, current) => accumulated ^ current, 0);
}

// Function to calculate the bitwise AND of the XOR sum of two arrays
function getXORSum(arr1, arr2) {
  // Calculate the XOR sum of the first array
  const xorSumArr1 = bitwiseXOROfArray(arr1);
  // Calculate the XOR sum of the second array
  const xorSumArr2 = bitwiseXOROfArray(arr2);

  // Return the result of the bitwise AND operation between the two XOR sums
  return xorSumArr1 & xorSumArr2;
}
