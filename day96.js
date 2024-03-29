// this is an optimal solution and pass all the test cases of leetcode

function numberOfWays(n, x) {
  const mod = 10 ** 9 + 7;
  const f = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  f[0][0] = 1;
  for (let i = 1; i <= n; ++i) {
    const k = Math.pow(i, x);
    for (let j = 0; j <= n; ++j) {
      f[i][j] = f[i - 1][j];
      if (k <= j) {
        f[i][j] = (f[i][j] + f[i - 1][j - k]) % mod;
      }
    }
  }
  return f[n][n];
}
