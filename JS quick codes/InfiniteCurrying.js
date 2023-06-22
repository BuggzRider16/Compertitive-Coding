
const add = (a) => {
    return (b) => {
        if (b) return add(a + b)
        return a
    }
}

console.log(add(5)(2)(4)(8)())



// function add(...args) {
//     const sumOne = args.reduce((acc, item) => acc + item, 0)
//     return function(...args2) {
//       if (args2.length === 0)
//         return sumOne
//       const sumTwo = args2.reduce((acc, item) => acc + item, 0)
//       return add(sumOne + sumTwo)
//     }
//   }
  
  
  
//   console.log(add(1)(2)(3, 4)())