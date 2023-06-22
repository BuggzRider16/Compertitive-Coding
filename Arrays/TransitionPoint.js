
//const prompt = require('prompt-sync')({ sigint: true })

var transitionPoint = function (arr, n) {
    let b = 0, end = n - 1, m = 0, found = false;
    while (b <= end) {
        m = parseInt((b + end) / 2)
        if (arr[m] === 1) {
            found = true;
            if (m === n - 1 || m === 0) {
                return m
            } else {
                end -= 1;
            }
        } else if (arr[m] === 0) {
            if (found) {
                return m + 1;
            } else {
                b += 1;
            }
        }
    }
    return -1
};
const main = () => {
    let arr = [1, 1, 1, 1]
    console.log("Transition Point", transitionPoint(arr, 4))
}

main()