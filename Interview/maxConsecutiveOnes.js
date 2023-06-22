
//const prompt = require('prompt-sync')({ sigint: true })

var findMaxConsecutiveOnes = function(nums) {
    let j = 0, max = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 1){
            j++;
        }
        else{
            if(max < j){
                max = j;
            }
            j = 0;
        }
    }
    return max
}
const main = () => {
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]
    console.log("Max consecutive ones", findMaxConsecutiveOnes(arr))
}

main()

//[1,1,0,1,1,1] -> 3
//[1,0,1,1,0,1] -> 2