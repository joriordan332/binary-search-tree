import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) {
      return null;
    }
    const mid = parseInt((start + end) / 2, 10);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data)
      {root.left = this.insert(value, root.left)}
    else if (value > root.data)
      {root.right = this.insert(value, root.right)};

    return root;
  }

  delete(value, root = this.root) {
    if (root == null) {
      return root;
    }
    if (value < root.data) { root.left = this.delete(value, root.left);
    } else if (value > root.data) {
    root.right = this.delete(value, root.right);
    } else {
      if (root.left == null) {
    return root.right;
      } if (root.right == null) {
    return root.left;
      }
      root.data = minValue(root.right);
      root.right = delete (root.data, root.right);
    }
    return root;
  }

  minValue(root) {
    let minV = root.data;
    while (root.left != null) {
      minV = root.left.data;
      root = root.left;
    }
    return minV;
  }

  find(value, root = this.root) {
      if(root === null) {
        return false
      } if (value === root.data) return root

      if (value < root.data) {  return this.find(value, root.left)
      } if (value > root.data) { return this.find(value, root.right)
        
    }
    return root
  }

  levelOrder(arr = [], queue = [], root = this.root) {
    if (root === null) return;
   
    arr.push(root.data);

    queue.push(root.left);
    queue.push(root.right);

    while (queue.length) {
      const level = queue[0];
      queue.shift();
      this.levelOrder(arr, queue, level);
    }

    return arr;
  }

  inOrder(arr = [], root = this.root) {
    if (root === null) return;

    if (root.left) this.inOrder(arr, root.left);

    arr.push(root.data);

    if (root.right) this.inOrder(arr, root.right);

    return arr;
  }

  preOrder(arr = [], root = this.root) {
    if (root === null) return;

    arr.push(root.data);
    
    if (root.left) this.preOrder(arr, root.left);

    if (root.right) this.preOrder(arr, root.right);

    return arr;
  }

  postOrder(arr = [], root = this.root) {
    if (root === null) return;

    if (root.right) this.postOrder(arr, root.right);
  
    else if (root.left) this.postOrder(arr, root.left);

    arr.push(root.data);

    return arr;
  }

  height(node = this.root) {
    if (node === null) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, root = this.root, depth = 0) {
    
    if (root === null) return 0;
    
    if (value === root.data)  
    return depth
    
    if (value < root.data) { return this.depth(value, root.left, depth +=1)
    }  return this.depth(value, root.right, depth +=1);    
  }

  isBalanced(root = this.root) {
    if(root == null) return false

    const leftHeight = this.isBalanced(root.left);
    const rightHeight = this.isBalanced(root.right);

    if (leftHeight - rightHeight >= 2 || rightHeight - leftHeight >=2) return false
    return 'Tree is balanced'
  }

  rebalance(root = this.root) {
    const arr = this.levelOrder([], [], root);
    arr.sort((a, b) => a - b);
    return this.root = this.buildTree(arr);
  }

  

}

const array = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];
const tree = new Tree([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
tree.prettyPrint(tree.root);
console.log(array);
tree.insert(21);
tree.prettyPrint(tree.root);
tree.delete(9);
tree.prettyPrint(tree.root);
console.log(tree.find(67));
console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.height());
console.log(tree.depth(6345));
console.log(tree.isBalanced());
console.log(tree.rebalance());




