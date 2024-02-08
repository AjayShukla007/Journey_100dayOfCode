const sumOfTwoIntegers = (a, b) => {
  while (a !== 0 && b !== 0) {
        const and = a & b;
        const xor = a ^ b;
        a = and << 1;
        b = xor;
    }
    return a !== 0 ? a : b;
};
