var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i += 1) {
        const value = Math.abs(nums[i]) - 1;
        nums[value] = -Math.abs(nums[value]);
    }

    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};

const main = () => {
    const nums = [4,3,2,7,8,2,3,1]
    const ans = findDisappearedNumbers(nums)
    console.log("Answer is", ans)
}

main()