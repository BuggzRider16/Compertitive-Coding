const prompt = require('prompt-sync')({ sigint: true })

const swap = (i, smallestElement, arr) => {
    let temp = arr[i]
    arr[i] = arr[smallestElement]
    arr[smallestElement] = temp
}

const main = () => {
    const arr = prompt('Enter numbers , seperated to be sorted \n').split(',')

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1])
                swap(j, j+1, arr)
        }

    }
    console.log("Sorted Array", arr)
}

main()