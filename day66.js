
const bitwiseComplement = n => {
  let mask = 1
  while(mask<n){
    mask=(mask << 1)+1
  }
  return mask^n
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));