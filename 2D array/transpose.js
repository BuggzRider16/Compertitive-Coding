

//very naive solution
function transposeMatrix(matrix) {
    const rows = matrix.length, columns = matrix[0].length
    const transposeArray = []
    for(let i = 0; i< columns; i++){
      const newRow = []
      for (let j = 0; j< rows; j++){
        newRow.push(matrix[j][i])
      }
      transposeArray.push(newRow)
    }
    return transposeArray;
  }

// with extra space
function transposeMatrix(matrix) {
    const rows = matrix.length, columns = matrix[0].length;
    const transposeArray = Array.from({ length: columns }, () => Array(rows));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        transposeArray[j][i] = matrix[i][j];
      }
    }
    return transposeArray;
  }