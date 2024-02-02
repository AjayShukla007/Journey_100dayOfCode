const findDublicate = nums => {
  let slow = 0;
    let fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    fast = 0;

    do {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow != fast);

    return slow
};
