const input  = require("./readLine")

// Normal approach returns number
const approach1 = (num) => {
  let binary = 0
  let exponentCounter = 0
  while (num != 0) {
    let remainder = num % 2
    binary += Math.pow(10,exponentCounter) * remainder 
    num = parseInt(num / 2)
    exponentCounter++
  }
  return binary
}

// Normal approach returns string
const approach2 = (num) => {
  let binary = ""
  while (num > 0) {
    let remainder = num % 2
    binary = remainder + binary
    num = parseInt(num / 2)
  }
  return binary
}

// JS approach
const approach3 = (num) => {
  return num.toString(2)
}

//Bitwise operator constant time approach
const approach4 = (n) => {
  let binaryString = ""
  for (i = n; i >= 0; i--) {
    var k = n >> i; 
    if (k & 1) // checking last bit
      binaryString += "1"
    else
      binaryString += "0"
  }
  return binaryString
}

// Bitwise operator O(log n) approach
const approach5 = (num) => {
  let binaryString = ""
  while (num) {
    if (num & 1)
      binaryString = "1" + binaryString
    else
      binaryString = "0" + binaryString
    num >>= 1   // num /=2
  }
  return binaryString
}

input.question("Enter a number to get binary: ",  (answer) =>{
  const decimalNumber = parseInt(answer)
  console.log(
    "Binary of",
    decimalNumber,
    "is : ",
    approach1(decimalNumber),
    approach2(decimalNumber),
    approach3(decimalNumber),
    approach4(decimalNumber),
    approach5(decimalNumber)
  )
  input.close();
});

