
var numIdenticalPairs = function (nums) {
    let noOfPairs = 0
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]){
            noOfPairs += map[nums[i]]
            map[nums[i]]++
        }
        else
            map[nums[i]] = 1
    }

    return noOfPairs
};


const main = () => {
    let nums = [1, 2, 3, 1, 1, 3]
    console.log("No of identical pairs", numIdenticalPairs(nums))
}

main()