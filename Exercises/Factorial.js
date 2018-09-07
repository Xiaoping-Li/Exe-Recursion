// Factorial: factorial of 5 is 5 * 4 * 3 * 2 * 1;
const factorial = (num) => {
  if (num === 1) return 1; // base case
  return num * factorial(num - 1);
}