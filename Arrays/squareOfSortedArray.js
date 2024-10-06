var sortedSquares = function (nums) {
    let j = k = nums.length - 1;
    let i = 0
    const newArray = []

    while (i <= j) {
        const valueFromleft = Math.pow(nums[i], 2);
        const valueFromRight = Math.pow(nums[j], 2);

        if (valueFromRight >= valueFromleft) {
            newArray[k] = valueFromRight
            j--
        } else if (valueFromleft >= valueFromRight) {
            newArray[k] = valueFromleft
            i++
        }
        k--
    }
    return newArray
};

console.log(sortedSquares([-7, -3, 2, 3, 11]))