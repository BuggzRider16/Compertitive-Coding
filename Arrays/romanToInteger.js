//https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150

var romanToInteger = function (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let i = 0, finalNumber = 0
    while (i < s.length) {
        // Check if s[i + 1] exists and if it's a larger numeral than s[i]
        if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            finalNumber += romanMap[s[i + 1]] - romanMap[s[i]]
            i++
        } else {
            finalNumber += romanMap[s[i]]
        }
        i++
    }
    return finalNumber
};

//a little optimised for runtime
var romanToInteger = function (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let finalNumber = 0;
    for (let i = 0; i < s.length - 1; i++) {
        // Add or subtract based on whether current numeral is less than the next one
        finalNumber += romanMap[s[i]] < romanMap[s[i + 1]] ? -romanMap[s[i]] : romanMap[s[i]];
    }

    // Add the last character’s value since there’s no numeral after it
    finalNumber += romanMap[s[s.length - 1]];
    return finalNumber;
};



const input = "MCMXCIV"
console.log(romanToInteger(input))