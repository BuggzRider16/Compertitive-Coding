const prompt = require('prompt-sync')({ sigint: true })

const swap = (i, smallestElement, arr) => {
    let temp = arr[i]
    arr[i] = arr[smallestElement]
    arr[smallestElement] = temp
}

const main = () => {
    const arr = prompt('Enter numbers , seperated to be sorted \n').split(',')
    let smallestElement = 0

    for (let i = 0; i < arr.length; i++) {
        smallestElement = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestElement])
                smallestElement = j
        }
        swap(i, smallestElement, arr)
    }
    console.log("Sorted Array", arr)
}

main()