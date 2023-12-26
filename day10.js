// This is a simple approach and will make it more reliable this is a brut force

function remove(nums) {
  let numArray = nums.sort((a, b) => a - b).filter((a,b)=>a==b);
  return numArray.length;
}
// this is a optimal approach
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    for (let i = k; i < nums.length; i++) {
        nums[i] = '_';
    }
    return k;
}

console.log(remove([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2]));

// this is a optimal approach for candles coumting using dynamix programming methods 
// i need to comment chunk this out because it require full space and i need to store both problem solutions in one file
/*
const fs = require("fs");

// Read all lines from STDIN
const buffer = fs.readFileSync(0);
const lines = buffer.toString().split("\n");

// Used for parsing each line
const parse = (line) => line.trim().split(" ").map(Number);

const MOD = 10 ** 9 + 7;

// Binary Indexed Tree for representing an array A of size n
class BIT {
    constructor(n) {
        this.nodes = new Array(n + 1).fill(0);
    }

    get size() {
        return this.nodes.length;
    }

    // Get sum of elements of A in range [0, index]
    query(index) {
        let sum = 0;
        for (; index > 0; index -= index & -index) {
            sum += this.nodes[index];
        }
        return sum;
    }

    // Update BIT when 'value' is added to A[index]
    update(index, value) {
        for (; index < this.size; index += index & -index) {
            this.nodes[index] += value;
            this.nodes[index] %= MOD;
        }
    }
}

const [n, k] = parse(lines[0]);
const H = [];
const C = [];

for (let i = 1; i <= n; i++) {
    const [h, c] = parse(lines[i]);
    H.push(h);
    C.push(c);
}

let count = 0;
// Maximum size of BIT
const max = Math.max(...H);

// colors is a k-bit mask where the i-th bit is set if a color i is to be included in the subsequence
for (let colors = 1; colors < 1 << k; colors++) {
    // A BIT for representing an imaginary 1-indexed array A, where A[value] contains the number of subsequences ending with 'value' 
    const bit = new BIT(max);

    for (let i = 0; i < n; i++) {
        // Consider candle i only if its color is included in the mask 'colors'
        if ((colors >> (C[i] - 1)) & 1) {
            // Number of subsequences ending with A[[H[i]]] = 1 + Sum of number of subsequences ending with [1,2,3,..., H[i] - 1]
            // Update the BIT since A[[H[i]]] is updated.
            bit.update(H[i], 1 + bit.query(H[i] - 1));
        }
    }

    // Find number of increasing subsequences that contain candles of any number of colors
    if (colors.toString(2).match(/1/g).length % 2 == k % 2) {
        count += bit.query(bit.size - 1);
        count %= MOD;
    } else {
        // Remove the increasing subsequences that do not contain candles of k colors
        count -= bit.query(bit.size - 1);
        count %= MOD;
    }
}

console.log(count);

*/


