// this is an optjmal soljtion and will pass the leetvode test cases and beats 100% in javascriot runtime on march 8 2024 at 7:pm with 70ms
function xorQueries(arr, queries) {
  const ans = [];
  const xors = new Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; ++i) xors[i + 1] = xors[i] ^ arr[i];

  let i = 0;
  for (const query of queries) {
    const left = query[0];
    const right = query[1];
    ans[i++] = xors[left] ^ xors[right + 1];
  }

  return ans;
}
