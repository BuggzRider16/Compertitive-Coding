var plusOne = function (digits) {
    let carry = 0
    const result = []
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = 0
        if (i === digits.length - 1) {
            sum = digits[i] + 1
        }else{
            sum = digits[i] + carry
        }
        carry = sum > 9 ? 1 : 0
        result.unshift(carry ? 0 : sum)
    }
    if (carry)
        result.unshift(carry)
    return result
};

console.log(plusOne([9, 9]))