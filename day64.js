
const decode = encoded => {
  let list = Array.from(encoded);
  // Now we get [a1^a2, a1^a3 ... a1^an]
  // Noticed: we don't need a list to store all xor pairs, becauce we just need
  // (a1^a2) ^ (a1^a3) ^ (a1^a4) ... (a1^an), so we can use a  single variable to store it,
  // current implemention just for better detail explain
  for (let i = 1; i < list.length; i++) {
    list[i] = list[i] ^ list[i - 1];
  }

  // There is an integer array perm that is a permutation of the first n positive integers
  // so a1 ^ a2 ^ ... an = 1 ^ 2 ^ 3 ... ^ n
  let allXOR = 0;
  for (let i = 1; i <= encoded.length + 1; i++) {
    allXOR = allXOR ^ i;
  }

  // (a1^a2) ^ (a1^a3) ^ (a1^a4) ... (a1^an) ^ (a1^a2^a3^a4...an)
  let firstElement = list.reduce((a, b) => a ^ b) ^ allXOR;

  // now reduce to leetcode 1720 problem
  let ans = [firstElement];
  for (let encode of encoded) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/at
    // https://v8.dev/features/at-method
    ans.push(encode ^ ans.at(-1));
  }

  return ans;
};
