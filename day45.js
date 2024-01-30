const singleNumInSortedArray = (nums)=>{
  let left = 0;
  let right = nums.length - 1;
  
  while(left < right){
    let middle = Math.round((left + right)/2);
    if(m && 1) m--;
    if (nums[m] === nums[m+1]) {
      left = m + 2;
    } else {
      right = m;
    }
  }
  
};