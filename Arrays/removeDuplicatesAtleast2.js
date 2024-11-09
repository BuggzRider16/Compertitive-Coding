// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.


var removeDuplicates = function (nums) {
  let left = 1, count = 0
  for (let right = 1; right < nums.length; right++) {
      if (nums[right] !== nums[right-1]) {
          if (count >= 1) {
              left++
              count = 0
          }
          nums[left++] = nums[right]
      } else {
          count++
      }
  }
  return left
};
const inputArray = [0,0,1,1,1,1,2,3,3]
console.log(`Size: ${removeDuplicates(inputArray)}`, inputArray)
