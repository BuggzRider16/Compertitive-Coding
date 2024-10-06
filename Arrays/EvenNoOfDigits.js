/*
Given an array nums of integers, return how many of them contain an even number of digits.
Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105

*/



const prompt = require('prompt-sync')({ sigint: true })


// My solution
var findNumbersMy = function (nums) {
    let evenDigitCount = 0
    for (let num of nums) {
        let str = num.toString()
        if (str.length % 2 === 0)
            evenDigitCount++
    }
    return evenDigitCount
}
// Optimised my 
var findNumbers = function (nums) {
    return nums.reduce((count, num) => {
        if (`${num}`.length % 2 === 0)
            return count++
        return count
    }, 0)
};

//Perfect solution for this Question to this range
var findNumbersPerfect = function (nums) {
    let number = 0;
    let d = 0;
    for (let i = 0; i < nums.length; i++) {
        d = nums[i];
        if (d >= 10 && d < 100) {
            number++;
        } else if (d >= 1000 && d < 10000) {
            number++;
        } else if (d >= 100000) {
            number++;
        }
    }
    return number;
};

const main = () => {
    const arr = prompt('Enter numbers , seperated to be sorted \n').split(',')
    console.log("numbers having Even number of digits", findNumbersMy(arr))
}

main()