class Node {
  constructor (data) {
      this.data = data,
      this.left = null;
      this.right = null;
  }
}

class Tree {
  constructor (array) {
      this.root = this.buildTree(array)
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

    prettyPrint = (node, prefix = "", isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };

    insert(value, root = this.root) {
      if (root === null) {
        root = new Node(value)
       return root
      }
      if (value < root.data) 
      root.left = this.insert(value, root.left)
        else if (value > root.data ) 
        root.right = this.insert(value, root.right)
        
      return root


    }

}



let array = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
const tree = new Tree(array)
tree.prettyPrint(tree.root);
console.log(array)
tree.insert(21);
tree.prettyPrint(tree.root);