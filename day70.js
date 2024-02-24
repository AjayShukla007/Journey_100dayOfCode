// this is an opitmal solutoin and will pass all the test cases
const xorOparation = (n, start) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
};
