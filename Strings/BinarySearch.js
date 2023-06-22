var search = function(nums, target) {
    var [left, right] = [0, nums.length-1] 
    var mid
    
    while (left <= right) {
        mid = left + Math.floor((right-left)/2)
        nums[mid] <= target ? left = mid + 1: right = mid -1
    }
    return nums[right] == target ? right : -1
};