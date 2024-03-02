// this is an optinal solution and pass all the test cases and beats 100% js runtime on 2/02/2024 at 18:31 ist
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
