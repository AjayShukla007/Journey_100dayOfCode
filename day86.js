// this is an optimal solution and pass all the test cases
const countBits = n => {
  return Array.from(
    { length: n + 1 },
    (_, i) => i.toString(2).replace(/0/g, "").length
  );
};
