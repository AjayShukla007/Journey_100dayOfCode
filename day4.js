// FACTORIAL OF A NUMBER
// in mathmatic factorial of a not negetive integer 'n', denoted 'n' is the product of all positive integer less thrn or equal to 'n'
const fact = num => {
  let factNum = 1;
  for (let i = 2; i <= num; i++) {
    factNum = factNum * i;
  }
  return factNum;
};
// the time complexity is Big O O(n) linear
// console.log(fact(5));

// prime number
// in mathmatic, a prime number is a integer which is not be appere when multiply any natural number
// for rg 5 is prime number when 4 is not because 2*2 we get 4 and 5 cant

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// if we run withaut using math then thr Big O = O(n) but after we use math the big O will be O(sqrt(n))
console.log(isPrime(5)); //true
console.log(isPrime(4)); // false
console.log(isPrime(3)); // true
console.log(isPrime(9)); // false dont knoe how
