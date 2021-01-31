
// You should implement your task here.

module.exports = function towelSort(matrix) {
  // Create an empty array for result
  let arr = [];
  // Check for correct input in 'matrix'
  if (matrix === undefined || !matrix.length) {
    return arr;
  }
  /*
   Calculate one array using reduce() of 'matrix' array with ispection of next element index
   If next index %2 != 0 -> we need to reverse this element (next array) 
   concat each element to result array
  */
  arr = matrix.reduce(function (resultArr, nextElem, index) {

    if (index % 2) {
      return resultArr.concat(nextElem.reverse());
    } else {
      return resultArr.concat(nextElem);
    }

  });

  return arr;
}
