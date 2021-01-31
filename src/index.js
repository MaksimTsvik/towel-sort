
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  if (matrix === undefined || !matrix.length) {
    return arr;
  }

  arr = matrix.reduce(function (array, nextElem) {

    for (let i = 0; i < matrix.length; i++) {
      let reverseElem = [];
      if (i % 2 != 0) {
        reverseElem = nextElem.reverse();
        return array.concat(reverseElem);
      } else {
        return array.concat(reverseElem);
      }

    }


  });

  return arr;
}
