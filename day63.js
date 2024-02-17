// 
const decode = (encoded, first) => {
  const arr = new Array(encoded.length + 1);
  arr[0] = first;
  for (let i = 0; i < encoded.length; i++) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }
  return arr;
};
