const input = require("../readLine");
// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Mathematics/video/MTgzOQ%3D%3D
const checkPrime = (num) => {
  let i = 2
  if (num === 1)
    return false
  while (i <= Math.sqrt(num)) { //i*i<=num
    if (num % i === 0)
      return false
    i++
  }
  return true
}

/*
-) Naive Approach O(nlogn)
-) First we are checking if i is prime or not, if its prime check if its incremental power also 
   is a factor.
*/
const checkPrimeFactors1 = (num) => {
  if (num < 1)
    return "No prime factors"
  for (let i = 2; i < num; i++) {
    if (checkPrime(i)) {
      let primePow = i
      while (num % primePow === 0) {
        console.log(i)
        primePow *= i
      }
    }
  }
}
/*
-) A more efficeient approach will be to find iterate from 2 to squareRoot of given number(same as that to check prime)
-) Then to find all the prime factors we can keep on dividing number by a number till it is not divisible anymore. The last value 
   (left by continous divisiblity of n) will be the last prime factor.
-) O(Square root of n)
*/
const checkPrimeFactors2 = (num) => {
  if (num < 1)
    return "No prime factors"
  for (let i = 2; i < Math.sqrt(num); i++) {
    while (num % primePow === 0) {
      console.log(i)
      num /= i
    }
  }
  if (n > 1)
    console.log(n)
}

/*
-) First we will check for divisiblity by 2 and 3 completely as many of the numbers will be completely divisble by these two.
-) For the remaining numbers, we iterate from 5 to sqrt(n) and check for each iteration whether (that value)
   or (that value + 2) divides n or not and increment the value by 6 [because any prime can be expressed as 6n+1 or 6n-1].
   If we find any number that divides, we return false, else true.
-) If at last number is left it will be a prime factor that is neither divisible by 2 or 3 so we will print that as well 
*/

const checkPrimeFactors3 = (num) => {
  while (n % 2 === 0) {
    console.log(2)
    n /= 2
  }
  while (n % 3 === 0) {
    console.log(3)
    n /= 3
  }
  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    while (n % i === 0) {
      console.log(i)
      n /= i
    }
    while (n % (i + 1) === 0) {
      console.log((i + 1))
      n /= (i + 1)
    }
  }
  if (n > 3) {
    console.log(n)
  }
}

input.question("Enter a number to check for prime: ", (answer) => {
  const number = parseInt(answer)
  console.log(
    "no of trailing zeros : ",
    checkPrimeFactors1(number),
    checkPrimeFactors2(number),
    checkPrimeFactors3(number),
  )
  input.close();
});