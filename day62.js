const toHex = n => {
  let ret = "";
  const chars = "0123456789abcdef";

  if (num < 0) {
    num += Math.pow(2, 32);
  }

  while (num > 0) {
    const mod = num % 16;
    ret = chars.charAt(mod) + ret;
    num = Math.floor(num / 16);
  }

  return ret || "0";
};
