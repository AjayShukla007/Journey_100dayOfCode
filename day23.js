function permutationII(nums) {
  const res = [];
    nums.sort((a, b) => a - b);
    const perm = (arr, visited) => {
        if (arr.length === nums.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue;
            }
            visited[i] = true;
            arr.push(nums[i]);
            perm(arr, visited);
            arr.pop();
            visited[i] = false;
        }
    };
    
    perm([], []);
    return res;
}

console.log(permutationII([1,1,2]));