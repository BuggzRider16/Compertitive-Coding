
//const prompt = require('prompt-sync')({ sigint: true })


var insertAndShift = (i, arr) => {
    let temp = arr[i + 1]
    arr[i + 1] = 0
    for (let j = i + 2; j < arr.length; j++) {
        let temp2 = arr[j]
        arr[j] = temp
        temp = temp2
    }
}

var duplicateZerosMy = function (arr) {
    let i = 0
    while (i < arr.length) {
        if (i !== arr.length - 1 && arr[i] === 0) {
            insertAndShift(i, arr)
            i += 2
        }
        else
            i++
    }
};
//best 
var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++;
        }
    }
};


//test
var duplicateZerosTest = function (arr) {
    let countZero = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 0) {
            countZero++;
        }
    }
    let i = arr.length - 1;
    let j = arr.length - 1 + countZero;
    while (i > -1) {
        if (j < arr.length) {
            arr[j] = arr[i];
        }

        if (arr[i] === 0) {
            j--;
            if (j < arr.length) {
                arr[j] = arr[i];
            }
        }
        j--;
        i--;
    }
}
const main = () => {
    // const arr = prompt('Enter numbers , seperated to be sorted \n').split(',')
    let arr = [1, 0, 2, 3, 0, 4, 5, 0]
    duplicateZerosTest(arr)
    console.log("Changed Array", arr)
}

main()