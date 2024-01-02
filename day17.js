// if we go for the brute firce thisnwill take our lots of time and ends up getting time complexity of O(n!*n)
// const reversing = (arr, start, end)=>{
//   while(start<end){
//     let temp = start;
//     arr[start]= arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// };
const shorting = (arr, index)=>{
  const sortedSection = arr.splice(index + 1).sort((a, b) => a - b);
  arr.push(...sortedSection);
};
const nextPermutation = (nums)=>{
  let index = -1;
  const n = nums.length;
  for(let i = n-2; i >= 0; i--){
    if(nums[i] < nums[i+1]){
      index = i;
      break;
    }
  }
  if(index == -1){
    nums.reverse();
    return nums;
  }
  
  for(let i = n - 1; i > index; i--){
    if(nums[i]>nums[index]){
      // nums[i] = (nums[index]), nums[index]=nums[i];
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      break;
    }
  }
  shorting(nums, index);
  // nums.sort((a,b)=>(a+index) - (b));
  
  return nums;
};

console.log(nextPermutation([2,1,5,4,3,0,0]));
console.log(nextPermutation([1,2,3,4,5]));
console.log(nextPermutation([5,4,3,2,1]));