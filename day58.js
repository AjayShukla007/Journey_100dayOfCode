//
const findComplement = num => {
  let r = 0;
  let i = 1;
  while(num > i && i > 0){
    r += (num^i)&i;
    i = (i<<1);
  }
  return r;
};

console.log(findComplement(5));
