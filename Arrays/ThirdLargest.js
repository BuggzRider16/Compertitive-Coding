var thirdMax = function(nums) {
    let a1 = 0,a2 = 0, a3 = 0
    
         for (i = 0 ; i < nums.length ; i++){
            if (nums[i]>a1){
                a3 = a2
                a2 = a1
                a1= nums[i]
            }
            else if (nums[i]!=a1 && nums[i]>a2 ){
                a2 = nums[i];
            }
            else if((nums[i]!==a1&& nums[i]!==a2) && nums[i]>a3){
                a3 = nums[i]
            }
        }
    return a3 || a1
}

const main = () => {
    const nums = [2,2,3,1]
    const ans = thirdMax(nums)
    console.log("Answer is", ans)
}

main()