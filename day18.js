var jump = (nums) => {
  if(!nums || nums.length < 1) return 0;
  
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if(i > maxReach) return false;
    
    maxReach = Math.max(maxReach,i+nums[i]);
    if (maxReach >= n-1) return true;
  }
  return false;
};


var jump_ll = (nums)=>{
  const n = nums.length;
    if (n <= 1) return 0;

    let maxReach = nums[0]; // Maximum index that can be reached
    let steps = nums[0]; // Number of steps available
    let jumps = 1; // Number of jumps required

    for (let i = 1; i < n; i++) {
        // If current index can be the maximum reach
        if (i === n - 1) {
            return jumps;
        }

        // Update the maximum reach
        maxReach = Math.max(maxReach, i + nums[i]);

        // Decrement steps available as we move forward
        steps--;

        // If no more steps left, take a jump and update steps with maxReach - current index
        if (steps === 0) {
            jumps++;
            steps = maxReach - i;
        }
    }

    return jumps;
};
console.log(jump_ll([2, 3, 1, 1, 4]));


function absolutePermutation(n, k) {
    const result = [];

    // If k is 0, return the original sequence
    if (k === 0) {
        for (let i = 1; i <= n; i++) {
            result.push(i);
        }
        return result;
    }

    // If n is not divisible by 2 * k, return -1
    if (n % (2 * k) !== 0) {
        return [-1];
    }

    // Create the absolute permutation
    let toggle = true;
    for (let i = 1; i <= n; i++) {
        if (toggle) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }

        if (i % k === 0) {
            toggle = !toggle;
        }
    }

    return result;
}

// Example usage:
const n = 10;
const k = 5;
const result = absolutePermutation(n, k);
console.log(result.join(' '));