const str = 'abcdcbkkiaahahaakkmkklllpp'
//aahahaa
//longest substring palindrome


let maxSubStr = ''

for (let i = 0; i < str.length; i++) {
    for (let j = (str.length - 1); j >= i; j--) {
        let subStr = str.substring(i, j)
        let reverserStr = subStr.split('').reverse().join('')
        if (subStr === reverserStr && subStr.length > maxSubStr.length) {
            maxSubStr = subStr
        }
    }
}

console.log(maxSubStr)