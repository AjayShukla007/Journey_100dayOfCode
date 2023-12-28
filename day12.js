function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;

        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

const grades = [73, 67, 38, 33];
// brite force solution
function gradingSystem(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] + 2 >= 40 && (grades[i] + 2) % 5 == 0) {
      grades[i] = grades[i] + 2;
    }
  }
  return grades;
}
console.log(gradingSystem(grades)); // Output: [75, 67, 40, 33]

// optimal solution
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
