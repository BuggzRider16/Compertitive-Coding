
/*
 * Determines if a given sequence is a subsequence of the provided array.
*/

function isValidSubsequence(array, sequence) {
    let i = 0, j = 0;
  
    while(i < array.length && j < sequence.length ){
      if(array[i] === sequence[j])
        j++
      i++
    }
    return j === sequence.length
  }

console.log(isValidSubsequence([1, 2, 3, 4], [1, 3])); // true
console.log(isValidSubsequence([1, 2, 3, 4], [2, 4])); // true
console.log(isValidSubsequence([1, 2, 3, 4], [4, 3])); // false
console.log(isValidSubsequence([1, 2, 3, 4], [5])); // false
  