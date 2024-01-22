
const singleNum = (nums, target)=>{
  if(nums.length === 1) return nums[0];
  let result = 0;
  nums.forEach((e)=>{
    result = result ^ e;
  });
  return result;
};
console.log(singleNum([1,1,2,2,4]));