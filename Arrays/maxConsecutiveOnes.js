//Runtime: 75 ms, Memory Usage: 44.4 MB
var findMaxConsecutiveOnes1 = function (nums) {
    let i = 0, max = 0;
    for (let j = 0; j <= nums.length; j++) {
        if (j == nums.length || nums[j] === 0) {
            max = Math.max(max, j - i)
            i = j + 1
        }
    }
    return max
};
//Runtime: 60 ms
var findMaxConsecutiveOnes2 = function (nums) {
    let j = 0, max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            j++;
            max = Math.max(max, j)
        }
        else {
            j = 0;
        }
    }
    return max
}
//Runtime: 41 ms
var findMaxConsecutiveOnes = function (nums) {
    let res = 0;
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        res = Math.max(res, count);
    }
    return res;
};

let arr = [1, 1, 0, 1, 1, 1]
console.log("Max consecutive ones approach 1", findMaxConsecutiveOnes1(arr))