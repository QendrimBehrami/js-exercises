// Problem generated by ChatGPT 3.5

/**
 *
 * @param {Array} numbers
 */
function sumOfPositiveNumbers(numbers) {
  let r = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    r += (number > 0) * number;
  }
  return r;
}

// Example usage:
const numbers = [5, -2, 9, 3, -1, 12];
const result = sumOfPositiveNumbers(numbers);
console.log(result); // Expected output: 29 (5 + 9 + 3 + 12)
