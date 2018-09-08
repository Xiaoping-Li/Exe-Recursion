// Using recursion to reverse a string
const reverseStr = (str) => {
  const n = str.length;
  if (n === 1) return str[0];
  return str[n - 1] + reverseStr(str.slice(0, n - 1));
}