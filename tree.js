class Node {
  constructor (data) {
      this.data = data,
      this.left = null;
      this.right = null;
  }
}


class Tree {
  constructor (array) {
      this.root = buildTree(array)
  }
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index)
}

const noDuplicates = removeDuplicates(array);

function mergeSort(noDuplicates) {
if (noDuplicates.length < 2) {
  return noDuplicates;
}

const mid = Math.floor(noDuplicates.length / 2);
const leftArray = noDuplicates.slice(0, mid);
const rightArray = noDuplicates.slice(mid);

return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge(leftArray, rightArray) {
const mergeResult = [];
while (leftArray.length && rightArray.length) {
  if (leftArray[0] <= rightArray[0]) {
    mergeResult.push(leftArray.shift());
  } else {
    mergeResult.push(rightArray.shift());
  }
}
return [...mergeResult, ...leftArray, ...rightArray];
}



const sortedArray = mergeSort(noDuplicates);
array = sortedArray;
console.log(array);





function buildTree(array, start = 0, end = array.length - 1) {
  if (start > end) {
    return null;
  }
  const mid = parseInt((start + end) / 2, 10);
  const node = new Node(array[mid]);

  node.left = buildTree(array, start, mid - 1);
  node.right = buildTree(array, mid + 1, end);

  return node;
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree = new Tree(array)
prettyPrint(tree.root);


