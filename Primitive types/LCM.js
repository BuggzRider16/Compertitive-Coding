const input = require("../readLine");
// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Mathematics/video/MTg0Nw%3D%3D

/*
-) To find LCM is to find the maximum of both numbers, then iterate from that number,
   till we find a number that is completely divisible by both numbers. O(a*b - max(a,b))
-) LCM of two number is always equal to or greater than max number.
*/
const getLCM1 = (num1, num2) => {
  let maxNum = Math.max(num1, num2)
  while (maxNum % num1 !== 0 || maxNum % num2 !== 0) {
    maxNum++;
  }
  return maxNum
}

/*
-) a x b = LCM(a, b) * GCD (a, b)
   LCM(a, b) = (a x b) / GCD(a, b)
-) Here, we calculate GCD using, Optimised Euclidean Algorithm. O(log(min(a,b))
*/

const getHcf = (num1, num2) => {
  if (num2 === 0) {
    return num1
  }
  return getHcf(num2, num1 % num2)
}

const getLCM2 = (num1, num2) => {
  return (num1 * num2) / getHcf(num1, num2)
}

input.question("Enter two numbers to get LCM: ", (answer) => {
  const numbers = answer.split(" ")
  console.log(
    "no of trailing zeros : ",
    getLCM1(...numbers),
    getLCM2(...numbers),
  )
  input.close();
});