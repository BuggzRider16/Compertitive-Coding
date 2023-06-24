/* 
-) Check if a binary digit contains parity. 
-) If a binary number contains even number of 1, then there is no parity 
   and if odd number of 1 it has parity.
*/
const input = require("./readLine")

// Normal approach 
const approach1 = (num) => {
  let parity = 0
  while (num) {

    parity ^= (num & 1)
    console.log(parity, num)

    num >>= 1;
  }
  // if (parity % 2 == 0) {
  //   return 0
  // }
  return parity
}

// // Input is string for large numbers
// const approach2 = (num) => {
//   let decimal = 0
//   let i = num.length - 1
//   let exponentCounter = 0
//   while (i >= 0) {
//     if (num[i]) {
//       decimal += Math.pow(2, exponentCounter) * num[i]
//     }
//     i--
//     exponentCounter++
//   }
//   return decimal
// }

// // Optimised using bitwise
// const approach3 = (num) => {
//   let decimal = 0
//   let exponentCounter = 0
//   while (num != 0) {
//     let remainder = num % 10
//     if (remainder) {
//       decimal += 1 << exponentCounter
//     }
//     num = parseInt(num / 10)
//     exponentCounter++
//   }
//   return decimal
// }

// // Shortcut in JS
// const approach4 = (num) => {
//   return parseInt(num, 2)
// }

input.question("Enter a number to check Parity: ", (answer) => {
  const binaryNumber = parseInt(answer)
  console.log(
    "Parity digit : ",
    approach1(binaryNumber),
    // approach2(binaryNumber),
    // approach3(binaryNumber),
    // approach4(binaryNumber)
  )
  input.close();
});

