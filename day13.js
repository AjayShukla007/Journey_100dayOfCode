
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target))
        closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
}
//nums = [-1,2,1,-4], target = 1
console.log(threeSumClosest([-1, 2, 1, -4], 1));

function gradingStudents(grades) {
  const roundedGrades = [];
  for (let grade of grades) {
    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
      if (nextMultipleOf5 - grade < 3) {
        roundedGrades.push(nextMultipleOf5);
      } else {
        roundedGrades.push(grade);
      }
    }
  }
  return roundedGrades;
}
console.log(gradingStudents(grades)); // Output: [75, 67, 40, 33]
