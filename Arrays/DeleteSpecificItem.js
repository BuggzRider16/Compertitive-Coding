var removeElement = function (nums, val) {
    let newLength = 0
    let j = nums.length - 1
    if(!(nums.length === 1 && nums[0]===val)){
        for (let i = 0; i <= j; i++) {
        if(i>j){
            break
        }
        if (nums[i] === val) {
            if (nums[j] === val)
                j--
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j--
        }
        newLength = i+1
    }
    }
    
    return newLength
};

const main = () => {
    const nums = [3, 2, 2, 3]
    const ans = removeElement(nums, 3)
    console.log("Answer is", ans)
}

main()