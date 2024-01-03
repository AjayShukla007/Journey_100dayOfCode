var jump = (nums) => {
  if(!nums || nums.length < 1) return 0;
  
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if(i > maxReach) return false;
    
  }
  
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
