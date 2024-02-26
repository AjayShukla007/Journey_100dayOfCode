// this is an opyimal solution ans will pass all the test cases of hackerrank
function diagonalDifference(arr) {
  let leftDia = 0;
  let rightDia = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDia += arr[i][i];
    rightDia += arr[i][arr.length - i - 1];
  }
  return Math.abs(leftDia - rightDia);
}
console.log(diagonalDifference(arrayDiegonal));
