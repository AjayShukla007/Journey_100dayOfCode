const singleNumberIII = nums => {
  let xorResult = 0;
    let a = 0, b = 0, i = 0;

    for(i = 0; i < nums.length; i++){
        xorResult ^= nums[i];
    }

    let setBitNo = xorResult & ~(xorResult - 1);

    for(i = 0; i < nums.length; i++) {
        if((nums[i] & setBitNo) === 0)
            a ^= nums[i];
        else
            b ^= nums[i];
    }

    return [a, b];
};
