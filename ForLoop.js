// All of the for loops can code in Recursion

// Simply countDown from num to 1, all possitive integers.
const countDown = (num) => {
  if (num === 0) return;
  console.log(num);
  return countDown(num - 1);
}