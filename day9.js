// hard leetcode Median of Two Sorted Arrays
// works on first try the second function i created from this is for reducung space complexity
// function medianofTwoSortedArrays(num1, num2) {
//   const merge = [...num1, ...num2].sort((a, b) => a - b);
//   if (merge.length < 2) return merge;
//   const n = merge.length - 1;
//   let mid = merge[0] + (merge[n] - merge[0]) / 2;
//   return mid;
// }
function medianofTwoSortedArrays(num1, num2) {
  const merge = [...num1, ...num2].sort((a, b) => a - b);
  if (merge.length < 2) return merge;
  let mid = merge[0] + (merge[merge.length - 1] - merge[0]) / 2;
  return mid;
}
console.log(medianofTwoSortedArrays([1, 2], [3, 4]));
console.log(medianofTwoSortedArrays([1, 3], [2]));
console.log(medianofTwoSortedArrays([1, 3], []));

// this apporacg will handle odd even numbers and this passed on all types of test cases on leetcode
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const totalLength = merged.length;
  
  if (totalLength % 2 === 0) {
    const mid = totalLength / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    const mid = Math.floor(totalLength / 2);
    return merged[mid];
  }
}
// tc O(n+m) sc O(n+m)

console.log(findMedianSortedArrays([1,3], [2,7]));


// 12 hours am/pm time to military time 24 hours 

// this function requre to gap in thr input
// function convertToMilitaryTime(time) {
//   const [timeStr, period] = time.split(' ');
//   let [hours, minutes, seconds] = timeStr.split(':');

//   hours = parseInt(hours, 10);

//   if (period === 'PM' && hours !== 12) {
//     hours += 12;
//   } else if (period === 'AM' && hours === 12) {
//     hours = 0;
//   }

//   const militaryTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
//   return militaryTime;
// }
function convertToMilitaryTime(time) {
  let hours = parseInt(time.slice(0, 2), 10);
  const minutes = time.slice(3, 5);
  const seconds = time.slice(6, 8);
  const period = time.slice(8);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  const militaryTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
  return militaryTime;
}

// Test cases
console.log(convertToMilitaryTime('12:01:00AM')); // Output: '00:01:00'
console.log(convertToMilitaryTime('12:01:00PM')); // Output: '12:01:00'
// Test cases
console.log(convertToMilitaryTime('12:01:00 AM')); // Output: '00:01:00'
console.log(convertToMilitaryTime('12:01:00 PM')); // Output: '12:01:00'
console.log(convertToMilitaryTime('07:05:45PM')); // Output: '12:01:00'