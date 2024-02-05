function add7(n) {
  return n + 7;
}

function multiply(a, b) {
  return a * b;
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Return the last letter of given string
 * @param {string} str
 */

let lastLetter = function (str) {
  if (typeof str == "string" && str) {
    return str.slice(-1);
  }
  return null;
};

let r = lastLetter(null);
console.log(r);
