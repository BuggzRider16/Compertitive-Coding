/*
-) Given a positive integer value N. The task is to find how many numbers less
   than or equal to N have numbers of divisors exactly equal to 3.
*/
const input = require("../readLine");

const checkExactlyThreeDivisors = (num) => {
  let count = 0;
  if (num === 1 || num === 2 || num === 3)
    return count
  for (let i = 4; i <= num; i++) {
    let divisors = 2, j = 2
    while (j < i) {
      if (i % j === 0)
        divisors++
      j++
    }
    if (divisors === 3)
      count++
  }
  return count
}

input.question("Enter a number: ", (answer) => {
  const number = parseInt(answer)
  console.log(
    `Numbers having exactly three divisors <=${number}`,
    checkExactlyThreeDivisors(number)
  )
  input.close();
});