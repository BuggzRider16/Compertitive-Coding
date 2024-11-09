// var validMountainArray = function (arr) {
//     if (arr.length <= 2) {
//         return false
//     }
//     let checkingUp = true
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return false
//         }
//         if (checkingUp) {
//             if (arr[i] < arr[i + 1] || i === arr.length - 1) {
//                 continue
//             } else {
//                 checkingUp = false
//             }
//         } else {
//             if (arr[i] > arr[i + 1] || i === arr.length - 1) {
//                 continue
//             } else {
//                 return false
//             }
//         }
//     }
//     return checkingUp ? false : true
// };

var validMountainArray = function (arr) {
    let i = 0, j = arr.length -1
  
    while(i<j){
      if(arr[i])
    }
  };
  

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))