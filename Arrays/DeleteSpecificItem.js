var removeElement = function (nums, val) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
};

const main = () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const ans = removeElement(nums, 2)
    console.log("Answer is", ans)
}

main()