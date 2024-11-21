var isHappy = function (n) {
    if (n === 1)
        return true
    if (n > 1 && n <= 9) 
        return false
    const obj = {}

    let number = n, sum = 0

    while (sum !== 1) {
        while (number > 0) {
            const digit = number % 10;
            sum = sum + (digit * digit)
            number = parseInt(number / 10)
        }
        if (obj[sum])
            return false
        else {
            obj[sum] = sum
            sum = 0
        }
    }
    return true
};

console.log(isHappy(19))