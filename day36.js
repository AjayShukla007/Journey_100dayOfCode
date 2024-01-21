var combinationSum = function (candidates, target) {
  // Create an array dp to store combinations for each target sum
  const dp = new Array(target + 1).fill().map(() => []);
  dp[0] = [[]];
  // Iterate through the candidates
  for (const candidate of candidates) {
    // For each candidate, iterate through the dp array to build combinations
    for (let i = candidate; i <= target; i++) {
      for (const combination of dp[i - candidate]) {
        dp[i].push([...combination, candidate]);
      }
    }
  }
  return dp[target];
};
