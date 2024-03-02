function bitCount(num) {
  let count = 0;
  while (num !== 0) {
    count += num & 1;
    num >>>= 1;
  }
  return count;
}
const minBitFlip = (start, goal) => {
  return bitCount(start ^ goal);
};
