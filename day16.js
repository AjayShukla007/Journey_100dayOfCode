// Simple approach but did not work om every test cases
// brute force
// function searchRange(nums, target) {
//   const tempNum = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       tempNum.push(i);
//     }
//   }
//   return tempNum.length>0?tempNum:[-1,-1];
// }

/*// lowerbound or search to first
function lowerbound(arr, n, x) {
  let low = 0, high = n-1;
  let ans = n;
  while(low<=high){
    let mid = (low+high)/2;
    // maybe the answer
    if (arr[mid]>=x) {
      ans = mid;
      // look for the small index on left
      high=mid-1;
    } else {
      log=mid+1; // look for the right
    }
  }
  return ans;
}

// upperbound or search to last
function upperbound(arr, n, x) {
  let low = 0, high = n-1;
  let ans = n;
  while(low<=high){
    let mid = (low+high)/2;
    // maybe the answer
    if (arr[mid]>x) {
      ans = mid;
      // look for the small index on left
      high=mid-1;
    } else {
      log=mid+1;
    }
  }
  return ans;
}
*/

// lowerbound or search to first
function firstOccur(arr, n, x) {
  let low = 0, high = n - 1;
  let first = -1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    // maybe the answer
   if (arr[mid]== x) {
    first = mid;
    high = mid - 1;
   }else if (arr[mid] < x) {
     low = mid + 1;
   } else {
     high = mid - 1;
   }
  }
  return first;
}

// upperbound or search to last
function lastOccur(arr, n, x) {
  let low = 0, high = n - 1;
  let last = -1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    // maybe the answer
    if (arr[mid] == x) {
      last = mid;
      low=mid + 1;
      // look for the small index on left
    } else if(arr[mid] < x){
      low=mid + 1;
    } else{
      high = mid - 1;
    }
  }
  return last;
}


function searchRange(nums, target) {
  const first = firstOccur(nums, nums.length, target);
  if(first == -1) return [-1, -1];
  const last = lastOccur(nums, nums.length, target);
  return [first, last];
  
}
console.log(searchRange([5,7,7,8,8,10],8));