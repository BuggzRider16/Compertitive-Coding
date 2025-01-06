/* here we have to find the two numbers in the array whose sum is equal to the target sum, we can use the hash table to solve this problem in O(n) time complexity
   we will iterate through the array and check if the targetSum - array[i] is present in the hash table or not, if it is present then we will return the two numbers */

const twoSumHashMap = function (nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]])
            return [nums[i], target - nums[i]]
        obj[target - nums[i]] = nums[i]
    }
    return []
};

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))


// If the numbers are sorted, we can use two pointers to solve the problem. The time complexity is O(n) and the space complexity is O(1).
const twoSumSorted = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target)
            return [nums[left], nums[right]]
        else if (sum > target)
            --right
        else
            ++left
    }
    return []
};

console.log(twoSumSorted([-4, -1, 1, 3, 5, 6, 8, 11], 10))