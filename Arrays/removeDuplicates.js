// Given a sorted array, the task is to remove the duplicate elements from the array.
const input = require("../readLine");

var removeDuplicates1 = function(nums) {
  let left = 0;
  for(let right = 0; right<=nums.length; right++){
      if(nums[right]!==nums[left]){
          nums[++left] = nums[right]
      }
  }
  return left;
};

var removeDuplicates2 = function(nums) { //perfect
  let left = 1;
  for(let right = 1; right<nums.length; right++){
      if(nums[right]!==nums[right-1]){
          nums[left++] = nums[right]
      }
  }
  return left;
};
const inputArray = [0,0,1,1,1,2,2,3,3,4]
console.log(`Size: ${removeDuplicates2(inputArray)}`, inputArray)

// input.question("Remove duplicates: ", (answer) => {
//   const inputArray = answer.split(" ")
//   console.log(`Size: ${removeDuplicates(inputArray)}`, inputArray)
//   input.close();
// });