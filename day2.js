// Big O notation which is worst case notation
const add = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}; 
// this will the time complexity of O(n) because the for loop is running n number of times and it will be linear because thr time complexity increases as size of thr input imcrease

function summation(n) {
  return n * (n + 1);
}
// the time complexity in this programm was O(1) which is constant in this case because the line in this programm was executed only once
// if there are 2 nested loops the time complexity will be O(n²) quadratic and
// if there is 3 nested loops it will be  O(n3) cubic time complexity
// and if input size reduced by half every interation it will be O(logn)  Logarithmic time complexity

function findPeak(array, n) {
  if (n <= 1) return 0;
  if (array[0] >= array[1]) return 0;
  if (array[n - 1] >= array[n - 2]) return n - 1;

  for (let i = 1; i < n - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      return i;
    }
  }
}



