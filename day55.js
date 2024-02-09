// this is an optimal approach 
const powerOfTwo = n => {
  return (n & (n - 1)) == 0;
};
console.log(powerOfTwo(8));
console.log(powerOfTwo(5));