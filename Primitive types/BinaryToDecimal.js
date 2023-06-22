const input  = require("./readLine")

// Normal approach returns number
const approach1 = (num) => {
  let decimal = 0
  let exponentCounter = 0
  while (num != 0) {
    let remainder = num % 10
    decimal += Math.pow(2,exponentCounter) * remainder 
    num = parseInt(num / 10)
    exponentCounter++
  }
  return decimal
}

// Normal approach returns string
const approach2 = (num) => {
  let decimal = ""
  while (num > 0) {
    let remainder = num % 10
    decimal = remainder + decimal
    num = parseInt(num / 2)
  }
  return decimal
}

input.question("Enter a number to get Decimal: ",  (answer) =>{
  const binaryNumber = parseInt(answer)
  console.log(
    "Decimal of",
    binaryNumber,
    "is : ",
    approach1(binaryNumber),
    approach2(binaryNumber),
  )
  input.close();
});

