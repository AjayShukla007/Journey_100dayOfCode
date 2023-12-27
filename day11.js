// Array
function removeElement(nums, val) {
  // const modNums = nums.filter((a,i)=>nums.indexOf(a)!==i);
  // const modNums = nums.filter(nums => nums !== val);
  let index = nums.indexOf(val);
  while (index !== -1) {
    nums.splice(index, 1);
    index = nums.indexOf(val);
  }
  return nums;
  // return modNums;
  // console.log(nums);
  // console.log(modNums);
}
console.log(removeElement([3,2,2,3],3));

// dynamic programming
// this is a optimal approach for Hyper Strings advanced level problem using dynamic programming methods 
// i need to comment chunk this out because it require full space and i need to store both problem solutions in one file
/*
function processData(input) {
    //Enter your code here
    var x = { a: 1, b: 2, c: 4, d: 8, e: 16, f: 32, g: 64, h: 128, i: 256, j: 512 };
    var z = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };
    var t = 1000000007;
    var a = input.split("\n");
    var a2 = a[0].split(' ').map(Number);
    var n = a2[0], m = a2[1];
    var h = [], f = [];
    for (var i = 0; i <= 10; i++) {
        h[i] = [];
        for (var j = 0; j <= 11; j++) h[i][j] = 0;
    }
    for (var i = 0; i <= 100; i++) {
        f[i] = [];
        for (var j = 0; j <= 11; j++) f[i][j] = 0;
    }
    var len = {};
    var last = {};
    var first = {};

    for (var i = 1; i < a.length; i++) {
        var y = 0;
        for (var j = 0; j < a[i].length; j++) {
            y = y + x[a[i].charAt(j)];
        }
        first[y] = z[a[i].charAt(0)];
        last[y] = z[a[i].charAt(a[i].length - 1)];
        len[y] = a[i].length;
        // console.log(y);
    }
    var found = 1;
    while (found) {
        found = 0;
        for (var i = 1; i < 1024; i++) if (len[i]) {
            for (var j = i + 1; j < 1024; j++) if (len[j] && !len[i + j]) {
                for (var k in x) {
                    // console.log(i, j, x[k], i & (x[k]*2-1), j & (x[k]*2-1));
                    if (
                        ((i & (x[k] * 2 - 1)) == i)
                        &&
                        ((j & (x[k] * 2 - 1)) == 0)
                    ) {
                        len[i + j] = len[i] + len[j];
                        first[i + j] = first[i];
                        last[i + j] = last[j];
                        found = 1;
                        break;
                    }
                }
            }
        }
    }
    f[0][11] = 1;

    for (var i = 1; i < 1024; i++) if (len[i]) {
        h[len[i]][first[i]]++;
    }
    found = 1;
    var sum = 1;

    for (var i = 1; i <= m; i++) {
        for (var j = 0; j <= 11; j++) {
            for (var k = 1; k < 1024; k++) {
                var p = len[k];
                var c1 = first[k];
                var c2 = last[k];
                if (i - p >= 0 && c1 <= j) {
                    // for (var c=0;c<=j;c++) {           
                    if (f[i - p][j] * h[p][c1] > 0) {
                        // console.log(i, last[k], i-p, j, p, c2, k, f[i][last[k]], f[i-p][j], h[p][c1]);
                        f[i][c2] = (f[i][c2] + f[i - p][j]) % t;
                    }
                    // }
                }
            }
        }
        for (var j = 0; j <= 11; j++) {
            sum = (sum + f[i][j]) % t;
        }
    }
    // console.log(f);
    // console.log(h);
    // var sum = 1;
    // for (var i=1;i<=m;i++) {
    //     for (var j=1;j<=i;j++) {
    //         f[i] += f[i-j]*h[j];
    //         f[i] = f[i]%t;
    //     }
    //     sum = (sum+f[i])%t;
    // }
    console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
*/
