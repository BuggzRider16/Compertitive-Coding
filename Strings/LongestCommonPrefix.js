var longestCommonPrefix1 = function (strs) {
    let minLength = Infinity, largestPrefix = "", firstString = strs[0]
    if (firstString.length === 0)
        return largestPrefix
    for (let i = 0; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length)
    }
    for (let i = 0; i < minLength; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstString[i]) {
                return largestPrefix
            }
        }
        largestPrefix += firstString[i]
    }
    return largestPrefix
};

console.log(longestCommonPrefix1(["a"]))