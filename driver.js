randomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  };

  const newTree = new Tree(randomArray(30));
  console.log(newTree.isBalanced());

console.log(newTree.levelOrder());
console.log(newTree.inorder());
console.log(newTree.preorder());
console.log(newTree.postorder());

newTree.insert(300);
newTree.insert(400);
newTree.insert(500);

console.log(newTree.isBalanced());
newTree.rebalance();
console.log(newTree.isBalanced());

console.log(newTree.levelOrder());
console.log(newTree.inorder());
console.log(newTree.preorder());
console.log(newTree.postorder());

newTree.prettyPrint();