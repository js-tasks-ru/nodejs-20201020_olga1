/**
 * @param a {Number}
 * @param b {Number}
 * @return {Number}
 */

function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else {
        throw TypeError ("функция должна бросать ошибку TypeError")
    }
}

module.exports = sum;
