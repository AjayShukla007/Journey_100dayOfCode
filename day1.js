function aVeryBigSum(ar) {
    // Write your code here
    let n = ar.length;
    if(n<=1)return ar[n];
    let long = 0;
    for(let i = 0; i < n; i++){
        long+=ar[i];
        console.log(long);
    }
    return long;
}

// TC O(n) SC O(1) 
console.log(aVeryBigSum([1000000005, 100000005]));

