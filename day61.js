const totalHammingDistance = nums => {
  var tot=0;
    for(var i=0; i<32; i++){
        var count=0;
        for(var j=0; j<nums.length; j++){
            count+= (nums[j]>>i)&1;
        }
        tot+= count*(nums.length-count);
    }
    return tot;
};
