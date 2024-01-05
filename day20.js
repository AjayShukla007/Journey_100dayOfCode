function rotation(arr, index) {
  const reversion = arr.splice(index).reverse();
  arr.push(...reversion);
}
function reverseKGroup(head, k) {
  // function reversion(arr, start, end){
  //     let temp = arr[start];
  //     arr[start] = arr[end];
  //     arr[end] = temp;
  //     start++;
  //     end--;
  // }
    rotation(head, k);
  // for (let i = k; i < head.length; i += k) {
  // }
  return head;
}
//head = [1,2,3,4,5], k = 3, Output: [3,2,1,4,5]
console.log(reverseKGroup([1, 2, 3, 4, 5], 2));
