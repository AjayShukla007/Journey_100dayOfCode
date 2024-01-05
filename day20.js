function rotation(arr, index) {
  const reversion = arr.splice(0,index).reverse();
  console.log(...reversion);
  console.log(...arr);
  arr.unshift(...reversion);
}

// THIS WORKS PERFECTLY BUT SOMEHOW THE LEETCODE NOT ACCEPTING IT THAT THIS PROBLEM CAN BE SOPVED USING DIFFERENT METHODS AS WELL FUCK LEETCODE, 
// I HAD TO USE TO SECOND METHOD WHICH I STOLE FROM ANOTHER DEV HEHE..
function rotation2(arr, from, to) {
  while(from < to){
    let tempt = arr[from];
    arr[from] = arr[to];
    arr[to] = tempt;
    from++;
    to--;
  }
}
function reverseKGroup(head, k) {
  // function reversion(arr, start, end){
  //     let temp = arr[start];
  //     arr[start] = arr[end];
  //     arr[end] = temp;
  //     start++;
  //     end--;
  // }
    let temp = 0;
    rotation2(head, temp, k-1);
    
    k+=k;
    if (k <= head.length) {
    temp+=k;
    rotation2(head, temp, k-1);
    }
    
  // for (let i = k; i < head.length; i += k) {
  // }
    return head;
}
//head = [1,2,3,4,5], k = 3, Output: [3,2,1,4,5]
console.log(reverseKGroup([1, 2, 3, 4, 5], 2));
console.log(reverseKGroup([1, 2, 3, 4, 5], 3));


const reverseKGroup2 = function(head, k) {
    let arr = [], store = head;
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    if(arr.length <= 1) return store;
    
    let ans = [], start = 0, end = k;

    while(1){
        if(end > arr.length){
            for(let i=start;i<arr.length;i++){
                ans.push(arr[i]);
            }
            break;
        }
        console.log(start, end)
        const revArr  = [...arr].splice(start,k).reverse();
        ans.push(...revArr)
        start = end;
        end = end + k;
    }

    head = store;
    for(let i=0;i<ans.length;i++){
        if(store){
            store.val = ans[i];
            store = store.next;
        }
    }

    return head;
};
console.log(reverseKGroup2([1, 2, 3, 4, 5], 2));
console.log(reverseKGroup2([1, 2, 3, 4, 5], 3));


/// MOST AFFICIENT APPROACH BEATS 93.665 RUNTIME 

