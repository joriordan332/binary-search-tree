const Tree = ('./Tree');

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
  console.log(array)

