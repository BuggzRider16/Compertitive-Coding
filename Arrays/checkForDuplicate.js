//perfect solution
// var containsDuplicate = function(nums) {
//     var numsSet = new Set(nums);
//     return (nums.length!==numsSet.size)
// };

//my Solution

var containsDuplicate = function(nums) {
    let map = {}
    
    for(let i = 0; i< nums.length; i++){
        if(map[nums[i]]){
            return true
        }
        map[nums[i]] = 1
    }
    return false
};