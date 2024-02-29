function pow(x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    const halfPow = pow(x, n / 2);
    return halfPow * halfPow;
  } else {
    return x * pow(x, n - 1);
  }
}

// Example usage:
// const result = pow(2, 3);
// console.log(result);