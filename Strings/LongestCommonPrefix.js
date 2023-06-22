var longestCommonPrefix = function (strs) {
    let lCP = ''
    let firstString = strs[0]

    if (firstString.length === 0)
        return lCP
    
    for (let i = 0; i < firstString.length; i++) {
        let commonPrefix = ''
        let j
        for (j = 0; j < strs.length; j++) {
            if (strs[j][i] === firstString[i]) {
                commonPrefix = firstString[i]
            }
            else {
                commonPrefix = ''
                break
            }
        }
        if (j === strs.length)
            lCP += commonPrefix
        else
        break
    }
    return lCP
};

console.log(longestCommonPrefix(["a"]))