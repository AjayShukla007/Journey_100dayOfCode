// starting here
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function findBottomLeftValue(root) {
  if (!root) return null;

  let queue = [root];
  let leftmostValue = null;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (i === 0) {
        leftmostValue = node.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return leftmostValue;
}

// Example usage:
// const root = new TreeNode(2);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);
// console.log(findBottomLeftValue(root));
