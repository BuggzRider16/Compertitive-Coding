const input = require("../readLine");
// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Mathematics/video/MTgzOQ%3D%3D

/*
-) To find HCF we will use the smaller of two numbers and then iterate from lower number to 1. if we find a number which 
   divides the both number will break. O(min(a,b))
-) HCF of two number can not me more than the smaller number .
*/
const getHcf1 = (num1, num2) => {
  let minNum = Math.min(num1,num2)
  while (minNum > 0) {
    if (num1 % minNum === 0 && num2 % minNum === 0)
      break
    minNum--;
  }
  return minNum
}
/*
-) To optimize the previous approach we will use Euclidean Approach which states that
   the GCD of two numbers doesn’t change if the smaller number is subtracted from the bigger number.
-) It is a process of repeat subtraction, carrying the result forward each time until the result is equal
   to any one number being subtracted.
*/
const getHcf2 = (num1, num2) => {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2
    } else {
      num2 = num2 - num1
    }
  }
  return num1
}

/*
-) More optimised 
*/

const getHcf3 = (num1, num2) => {
  if (num2 === 0) {
    return num1
  }
  return getHcf2(num2, num1 % num2)
}

input.question("Enter two numbers to get HCF: ", (answer) => {
  const numbers = answer.split(" ")
  console.log(
    "no of trailing zeros : ",
    getHcf1(...numbers),
    getHcf2(...numbers),
    getHcf3(...numbers),
  )
  input.close();
});

module.exports = getHcf3