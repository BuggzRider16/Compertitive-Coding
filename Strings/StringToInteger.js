const myAtoi = (s) => {
    const maxInt = Math.pow(2, 31) - 1
    const minInt = - Math.pow(2, 31)
    let isNegative = false
    let number = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1].match(/[0-9]/) && '-+'.includes(s[i])) {
            if (s[i] === '-') {
                isNegative = true
            }else if(s[i] === '+'){
                isNegative = false
            }else{
                break
            }
        }
        else if (s[i].match(/[0-9]/)) {
            if (s[i] !== 0)
                number = number * 10 + parseInt(s[i])
        } else {
            if (s[i] !== ' ')
                break
        }
    }
    number = isNegative ? number * -1 : number
    if (number < minInt) {
        return minInt
    } else if (number > maxInt) {
        return maxInt
    } else {
        return number
    }
};

console.log(myAtoi("+-12"))