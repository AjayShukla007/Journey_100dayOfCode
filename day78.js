const minOperations = (nums, k) => {
  
};
function bitCount(num) {
  let count = 0;
    while (num !== 0) {
      count += num & 1;
      num >>>= 1;
    }
    return count;
}