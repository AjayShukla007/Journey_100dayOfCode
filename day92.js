function getWordsInLongestSubsequence(words, groups) {
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (i === 0 || groups[i] !== groups[i - 1]) {
      ans.push(words[i]);
    }
  }
  return ans;
}
