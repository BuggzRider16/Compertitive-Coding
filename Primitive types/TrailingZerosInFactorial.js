/*
-) To find trailing zeros in a factiorial an easy approach will be to first find the factorial and
   then find number of zeros giving O(n) using two seperate loops.
-) Efficient approach is to consider prime factors of a factorial n.
   A trailing zero is always produced by prime factors 2 and 5. Our task is done if we can count the number of 5s and 2s.
   Consider the following examples:
   n = 5: There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So a count of trailing 0s is 1.
   n = 11: There are two 5s and eight 2s in prime factors of 11! (2 8 * 34 * 52 * 7). So the count of trailing 0s is 2.

   We can easily observe that the number of 2s in prime factors is always more than or equal to the number of 5s.
   So if we count 5s in prime factors, we are done. Giving O(log n).

   Following is the summarized formula for counting trailing 0s:
   Trailing 0s in n! = Count of 5s in prime factors of n! = floor(n/5) + floor(n/25) + floor(n/125) + ....
*/

const input = require("../readLine");

const trailingZerosInFactorial = (number) => {
    let noOfTrailingZeros = 0
    for (let i = 5; i <= number; i *= 5) {
        noOfTrailingZeros += parseInt(number/i) 
    }
    return noOfTrailingZeros
}

input.question("Enter a number to get trailing zeros in Factorial: ",  (answer) =>{
    const number = parseInt(answer)
    console.log(
      "no of trailing zeros : ",
      trailingZerosInFactorial(number),
    )
    input.close();
  });