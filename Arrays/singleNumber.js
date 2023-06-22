// var singleNumber = function(nums) {
//     let map = {}
    
//     for(let i = 0; i< nums.length; i++){
//         if(map[nums[i]]){
//             map[nums[i]] = map[nums[i]] +1
//         }else
//         map[nums[i]] = 1
//     }
//     Object.keys(map).forEach(item=>{
//         if(map[item]===1)
//             return item
//     })
    
// };

//perfect soluton 
var singleNumber = function(nums) {
    return nums.reduce((acc,item)=> acc ^ item, 0)  
};

console.log(singleNumber([2,2,1]))