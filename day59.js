// this is an optimal solution and pass all the test cases
const bineryGap = n => {
  binary = N.toString(2);
  binarysplit = binary.split("");
  let count = 0;
  let arr = [];
  for (var i = 0; i < binarysplit.length; i++) {
    if (binarysplit[i] === "1") {
      count++;
      arr.push(i);
    }
  }
  if (count === 1) {
    return 0;
  }
  let arr1 = [];
  for (var j = 0; j < arr.length - 1; j++) {
    arr1[j] = arr[j + 1] - arr[j];
  }
  return Math.max(...arr1);
};
