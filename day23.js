function permutation(nums) {
  const res = [];
  
  const perm = (arr)=>{
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      arr.push(nums[i]);
      perm(arr);
      arr.pop(nums[i]);
    }
  };
  perm([]);
  
  return res;
}