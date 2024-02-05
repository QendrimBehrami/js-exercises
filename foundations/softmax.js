// Implement the softmax function

/**
 * Compute the softmax function for an array of numbers
 * @param {Array} samples
 */
function softmax(samples) {
  let normalization = 0;
  samples.forEach((element) => {
    normalization += Math.exp(element);
  });
  let result = samples.map((element) => {
    return Math.exp(element) / normalization;
  });
  return result;
}

let x = [1.3, 4.9, 2.0]; // example input
let score = softmax(x);
let loss = score.map((element) => {
  return -Math.log(element);
});
// let averageLoss = loss.reduce((acc, curr) => acc + curr, 0) / loss.length;
console.log(score, loss);
