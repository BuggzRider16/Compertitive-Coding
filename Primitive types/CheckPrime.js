const input = require("../readLine");
// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Mathematics/video/MTgzOQ%3D%3D

/*
-) Naive Approach O(n)
*/
const checkPrime1 = (num) => {
  let i = 2
  if (num === 1)
    return "Not Prime"
  while (i < (num - 1)) {
    if (num % i === 0)
      return "Not Prime"
    i++
  }
  return "Prime"
}
/*
-) Iterate through all numbers from 2 to square root of n and for every number check if it divides n
   [because if a number is expressed as n = xy and any of the x or y is greater than the root of n,
   the other must be less than the root value]. If we find any number that divides, we return false.
-) O(Square root of n)
*/
const checkPrime2 = (num) => {
  let i = 2
  if (num === 1)
    return "Not Prime"
  while (i <= Math.sqrt(num)) { //i*i<=num
    if (num % i === 0)
      return "Not Prime"
    i++
  }
  return "Prime"
}

/*
-) Except for 2 and 3 all other numbers if divisible by 2 and 3 are not prime.
-) For the remaining numbers, we iterate from 5 to sqrt(n) and check for each iteration whether (that value)
   or (that value + 2) divides n or not and increment the value by 6 [because any prime can be expressed as 6n+1 or 6n-1].
   If we find any number that divides, we return false, else true.
*/

const checkPrime3 = (num) => {
  if (num === 2 || num === 3)
    return "Prime"
  if (num === 1 || num % 2 === 0 || num % 3 === 0)
    return "Not Prime"
  for (let i = 5; i <= Math.sqrt(num); i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0)
      return "Not Prime"

  return "Prime"
}

input.question("Enter a number to check for prime: ", (answer) => {
  const number = parseInt(answer)
  console.log(
    "no of trailing zeros : ",
    checkPrime1(number),
    checkPrime2(number),
    checkPrime3(number),
  )
  input.close();
});
