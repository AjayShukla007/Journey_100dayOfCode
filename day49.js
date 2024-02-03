// 
const hammingDistance = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);
  // Ensure that x and y have the same length in their binary representations
  if (x.length < y.length) {
    while (x.length !== y.length) {
      x = "0" + x;
    }
  } else {
    while (x.length !== y.length) {
      y = "0" + y;
    }
  }
  let distance = 0;
  // Iterate through the binary representations and count differing bits
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};
