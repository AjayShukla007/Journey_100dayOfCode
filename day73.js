// this is an optimal soltuion and pqss all the leetcode test cases
const findArray = pref => {
  let ans = new Array(pref.length);
  ans[0] = pref[0];
  for (let i = 1; i < ans.length; ++i)
      ans[i] = pref[i] ^ pref[i - 1];

    return ans;
};

console.log(findArray([5,2,0,3,1]));
console.log(findArray([13]));