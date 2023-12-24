// used two pointer apporoach
function mostWater(height) {
  let start = 0;
  let end = height.length - 1;
  let maxWater = 0;
  while (start < end) {
    let x = height[start];
    let y = height[end];
    // getting distance
    let water = Math.min(x, y) * (end - start);
    maxWater = Math.max(maxWater, water);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxWater;
}
console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));


function miniMaxSum(arr) {
  let totalSum = 0;
  let max = -Infinity;
  let min = Infinity;

  // Calculate total sum and find max and min elements in a single loop
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log(minSum, maxSum);
}
// miniMaxSum([]);

function BdayCandles(candles) {
  const maxCandles = Math.max(...candles);
  const tallestCandles = candles.filter(can=>can===maxCandles);
  return tallestCandles.length;
}
