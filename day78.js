const minOperations = (nums, k) => {
  const xors = nums.reduce((a, b) => a ^ b, 0);
  return this.bitCount(k ^ xors);
};
function bitCount(num) {
  let count = 0;
  while (num !== 0) {
    count += num & 1;
    num >>>= 1;
  }
  return count;
}
