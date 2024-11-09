var removeElement = function (nums, val) {
    let i = 0, j = nums.length - 1, k = 0
    while (i <= j) {
        if (nums[j] === val) {
            j--
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            k++
        }
    }
    return k
};

var removeElement2 = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k

};

// let nums1 = [1];

// console.log(nums1, removeElement(nums1, 1))

let nums1 = [3, 2, 2, 3];

console.log(nums1, removeElement(nums1, 3))