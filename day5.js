// learmed about ARRAYS

let a = [1, 2, 3, 4, 5, 6, 7];
// a = [-1, -100, 3, 99];
// a = [1, 2, 3];
let n = a.length;
let d = 3; // because we added a line where d=d%n so even if the d = 10 which is 3 more then thr a length itbwill ppint as 3 this will make less load on memory

// this is a brute force algoridm
const rightRotate = (a, n, d) => {
  d = d % n;
  // const tempArray = a.slice(d - 1, n);
  for (let i = n; i >= d; i--) {
    tempArray[i] = a[i - 1];
  }
  console.log(tempArray);
  for (let i = d; i < n; i++) {
    a[i - d] = a[i];
  }
  for (let i = n - d; i < n; i++) {
    a[i] = tempArray[i - (n - d)];
  }
  return a;
};
// the tc in this will be O(d) + O(d-n) + O(d) = O(d+n) and sc eill be O(d)
// console.log(rightRotate(a, n, d));

// now lets move to the optimal solution
const reversing = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rightRotateOptimal = (arr, n, d) => {
  d = d % n;
  // console.log(n % 2 == 0);
  // reversing(arr,0,d);
  reversing(arr, 0, n - 1);
  reversing(arr, 0, d - 1);
  reversing(arr, d, n - 1);
  return arr;
};

// console.log(rightRotate(a,n,d));
console.log(rightRotateOptimal(a, n, d));
