const input = require("./readLine")

// Normal approach returns number
const approach1 = (num) => {
  let decimal = 0
  let exponentCounter = 0
  while (num != 0) {
    let remainder = num % 10
    if (remainder) {
      decimal += Math.pow(2, exponentCounter) * remainder
    }
    num = parseInt(num / 10)
    exponentCounter++
  }
  return decimal
}

// Input is string for large numbers
const approach2 = (num) => {
  let decimal = 0
  let i = num.length - 1
  let exponentCounter = 0
  while (i >= 0) {
    if (num[i]) {
      decimal += Math.pow(2, exponentCounter) * num[i]
    }
    i--
    exponentCounter++
  }
  return decimal
}

// Optimised using bitwise
const approach3 = (num) => {
  let decimal = 0
  let exponentCounter = 0
  while (num != 0) {
    let remainder = num % 10
    if (remainder) {
      decimal += 1 << exponentCounter
    }
    num = parseInt(num / 10)
    exponentCounter++
  }
  return decimal
}

// Shortcut in JS
const approach4 = (num) => {
  return parseInt(num, 2)
}

input.question("Enter a number to get Decimal: ", (answer) => {
  const binaryNumber = parseInt(answer)
  console.log(
    "Decimal of",
    binaryNumber,
    "is : ",
    approach1(binaryNumber),
    approach2(`${binaryNumber}`),
    approach3(binaryNumber),
    approach4(binaryNumber)
  )
  input.close();
});

