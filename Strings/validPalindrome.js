//https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150

var isPalindrome = function (s) {
    const regex = /[^a-zA-Z00-9]/g
    const cleanString = s.replace(regex, "").toLowerCase()

    let j = cleanString.length - 1

    for (let i = 0; i < cleanString.length; i++, j--) {
        if (i === j)
            return true
        if (cleanString[i] !== cleanString[j])
            return false
    }
    return true
};

var isPalindrome2 = function(s) { // js easiest
    let string = s.trim().toLowerCase().replace(/\W|_/g, '')
    let reverseString = string.split('').reverse().join('')

    return string === reverseString;
};

console.log(isPalindrome(""))