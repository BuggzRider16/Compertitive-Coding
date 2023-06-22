const segregate = (arr) => {
    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 0 && arr[i] === 1) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        } else if(arr[j] === 0 && arr[i] === 0)(
            i++
        )
    }
    return arr
}

const arr = [1, 1, 1, 0, 1, 0, 1, 0, 1]
console.log(segregate(arr))
