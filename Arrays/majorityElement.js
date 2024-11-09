//https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function (nums) {
    let obj = {}, target = parseInt(nums.length / 2)
    if(nums.length === 1){
        return nums[0]
    }
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1
            if (obj[nums[i]] > target) {
                return nums[i]
            }
        } else {
            obj[nums[i]] = 1
        }
    }
};

var majorityElement2 = function(nums) { //perfect solution using Boyer-Moore Voting Algorithm
    let candidate = null;
    let count = 0;
 
    for (let num of nums) {
      if (count === 0) {
         candidate = num
      }
 
      count += (num === candidate) ? 1 : -1;
    } 
 
     // At this point, `candidate` is the majority element.
     return candidate;
 };

const inputArray = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(inputArray))