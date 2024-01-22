// we can use XOR ^
// XOR performs a Boolean exclusive OR operation on each bit of its integer arguments and by looking at the XOR truth table above: One or the other is true, but not both. Therefore, if all but one value in the array is unique, eventually, each duplicate value will cancel each other out during the bitwise operations and we will end up with a unique non-duplicate value.

const singleNum = (nums, target)=>{
  if(nums.length === 1) return nums[0];
  let result = 0;
  nums.forEach((e)=>{
    result = result ^ e;
  });
  return result;
};
console.log(singleNum([1,1,2,2,4]));