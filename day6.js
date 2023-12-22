// learned about array of matrics

// brute firce approach
// plateform hackerEarth codemonk Arrays
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let input = "";

process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input = input.trim().split("\n");
  const testCases = Number(input[0]);
  let index = 1;

  for (let i = 0; i < testCases; i++) {
    const matrixSize = Number(input[index++]);
    const matrix = [];

    for (let j = 0; j < matrixSize; j++) {
      matrix.push(input[index++].split(" ").map(Number));
    }

    // Your logic to count inversions in the matrix
    console.log(countInversions(matrix, matrixSize));
  }
});

function countInversions(matrix, matrixSize) {
  let inversions = 0;

  // Loop through the matrix to count inversions
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      for (let p = i; p < matrixSize; p++) {
        for (let q = j; q < matrixSize; q++) {
          if (matrix[i][j] > matrix[p][q]) {
            inversions++;
          }
        }
      }
    }
  }

  return inversions;
}
// rotate String leetcode problem
function rotateStr(s, goal) { return s.length === goal.length ? RegExp(goal).test(s + s) : false; }

// the optimal approach which comsume less mamory
var rotateString = function(s, goal) {
    if(s.length !== goal.length){return false}

    const tempArr = [...s, ...s].join("");
    const regex = new RegExp(`${goal}`);
    return regex.test(tempArr);
};

console.log(rotateString("abc", 'cba'));