function numberOfSteps(num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    steps += 1;
  }
  return steps;
}

// Example usage:
// const result = numberOfSteps(14);
// console.log(result);
