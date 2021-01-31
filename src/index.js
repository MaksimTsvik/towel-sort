
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  if (matrix === undefined || !matrix.length) {
    return arr;
  }

  arr = matrix.reduce(function (resultArr, nextElem, index) {

    if (index % 2 != 0) {
      return resultArr.concat(nextElem.reverse());
    } else {
      return resultArr.concat(nextElem);
    }

  });

  return arr;
}
