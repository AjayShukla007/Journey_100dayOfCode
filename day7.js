function rotateLeft(d, arr) {
  // Write your code here
  const rotate = (arr, start, end) => {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };
  d %= arr.length;
  rotate(arr, 0, d - 1);
  rotate(arr, d, arr.length - 1);
  rotate(arr, 0, arr.length - 1);

  return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5]));


const arrayDiegonal = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function diegonal(arr) {
  let lftDiagonal = 0;
  let rigDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    lftDiagonal += arr[i][i];
    rigDiagonal += arr[i][arr.length - i - 1];
    // console.log(lftDiagonal, rigDiagonal);
  }
  return Math.abs(lftDiagonal - rigDiagonal);
}
console.log(diegonal(arrayDiegonal));

function diagonalDifference(arr) {
  let lftDia = 0;
  let rigDia = 0;
  for (let i = 0; i < arr.length; i++) {
    lftDia += arr[i][i];
    rigDia += arr[i][arr.length - i - 1];
  }
  return Math.abs(lftDia - rigDia);
}
console.log(diagonalDifference(arrayDiegonal));

function printStairs(steps) {
  for (let i = 1; i <= steps; i++) {
    let spaces = " ".repeat(steps - i);
    let stair = "#".repeat(i);
    console.log(spaces + stair);
  }
}

// To print stairs with 5 steps:
printStairs(5);

function findPeak(array) {
  const n = array.length;
  if (n <= 1) return 0;
  let result = [];
  for (let i = 1; i < n - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      result.push(i);
    }
  }
  return result;
}

const array = [10, 20, 15, 2, 23, 90, 67];
const n = array.length;
const arr2 = [1, 4, 3, 8, 5];
// console.log(findPeak(array));
// console.log(findPeak(arr2));
// console.log(findPeak([1,4,4]));
console.log(findPeak([1, 8, 1, 8]));
const array2 = [1, 2, 3, 1];
const n2 = array2.length;
// const array2 = [1, 3, 20, 4, 1, 0];
// console.log(findPeak(array2,n2));

const arrPlusMinus = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plus += 1;
    } else if (arr[i] < 0) {
      minus += 1;
    } else {
      zero += 1;
    }
  }
  console.log((plus / arr.length).toFixed(6));
  console.log((minus / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus(arrPlusMinus);
