const countNodes = root => {
  if (root==null) return null;

    let getLevel = function(root) {
        let l = 0;
        while(root.left!=null) {
            root = root.left;
            l++;
        }
        return l;
    }
    
    let nodeDoesExist = function(levels, num, root) {
        let left = 0, right = 2 ** levels - 1
        for (let i=0;i<levels;i++) {
            let mid = left + parseInt((right - left)/2); // left mid
            if (num > mid) {
                root = root.right;
                left = mid + 1
            } else {
                root = root.left;
                right = mid
            }
        }
        return root!=null;                          
    };
        
    let levels = getLevel(root);
    
    let left = 0, right = 2 ** levels - 1;
    
    while (left < right) {
        let mid = left + parseInt((right - left + 1)/2); // right mid
        if (!nodeDoesExist(levels, mid, root)) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    
    return 2 ** levels + left
};
