const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  let length = matrix.length;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1){
      if (matrix[i][j] === '^^') {
        cats += 1;
      }
    }
  }
  return cats;
  // remove line with error and write your code here
}
module.exports = {
  countCats
};
