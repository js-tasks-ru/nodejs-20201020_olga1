/**
 * @param a {Number}
 * @param b {Number}
 * @return {Number}
 */

function sum(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
      throw new TypeError('функция должна бросать ошибку TypeError');
  }

  return a + b;
}

module.exports = sum;
