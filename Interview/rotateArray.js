var rotate = function (nums, k) {
    for (let i = 1; i <= k; i++) {
        let temp = nums[nums.length - 1]
        for (let j=nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = temp
    }
};
const nums = [-1,-100,3,99]
rotate(nums, 2)
console.log(nums)