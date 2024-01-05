function rotation(arr, index) {
  const reversion = arr.splice(index);
  arr.reverse().push(...reversion);
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
    if (k < head.length) {
    k+=k;
    reverseKGroup(head, k);
    }
    
  // for (let i = k; i < head.length; i += k) {
  // }
  if (k > head.length) {
    return head;
  }
}
//head = [1,2,3,4,5], k = 3, Output: [3,2,1,4,5]
console.log(reverseKGroup([1, 2, 3, 4, 5], 2));
