// Given a sorted array, the task is to remove the duplicate elements from the array.
const input = require("../readLine");

const removeDuplicates = (arr) => {
  let i = 0;
  if (arr.length === 1) {
    return 1
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

var removeDuplicates2 = function(nums) {
  let k = 0
  if (arr.length === 1) {
    return 1
  }
  for (let i = 0; i< nums.length; i++){
      if(nums[i]!==nums[i+1]){
          nums[k+1] = nums[i+1]
          k++
      }
  }
  return k
};
const inputArray = [2, 2, 2, 2, 2]
console.log(`Size: ${removeDuplicates(inputArray)}`, inputArray)

// input.question("Remove duplicates: ", (answer) => {
//   const inputArray = answer.split(" ")
//   console.log(`Size: ${removeDuplicates(inputArray)}`, inputArray)
//   input.close();
// });