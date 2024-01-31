// this solution if optimal and passing all the test cases
const validUtf8 = data => {
  let binary = data.map(d => {
    let b = "00000000" + d.toString(2);
    return b.substring(b.length - 8);
  });

  // current UTF8 length
  let current = 0;

  for (let i = 0; i < binary.length; i++) {
    let bytes = binary[i].indexOf("0");
    if (current == 0) {
      // skip the single byte char
      if (bytes == 0) {
        continue;
      }
      if (bytes > 4 || bytes < 2) {
        return false;
      }
      // set the remaining length
      current = bytes;
    } else {
      if (bytes != 1) {
        return false;
      }
    }
    current--;
  }
  return current == 0;
};
