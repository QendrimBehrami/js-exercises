/**
 *
 * @param {string} str
 */
function reverseString(str) {
  if (str) {
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
  }
  return "";
}

function isPalindrom(str) {
  return str == reverseString(str);
}

let testString = "Hello,olleH";
console.log(isPalindrom(testString));
