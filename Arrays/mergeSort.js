function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concat remaining elements (if any) from both left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    //OR

    // // Copy the remaining elements of L[], if there are any
    // while (i < n1) {
    //     arr[k] = L[i];
    //     i++;
    //     k++;
    // }

    // // Copy the remaining elements of R[], if there are any
    // while (j < n2) {
    //     arr[k] = R[j];
    //     j++;
    //     k++;
    // }
  }
  
  // Example usage:
  const arr = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(arr);
  console.log(sortedArray);  // Output: [ 3, 9, 10, 27, 38, 43, 82 ]