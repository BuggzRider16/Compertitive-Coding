var strStr = function (haystack, needle) {
    let foundAt = -1

    if (needle.length > haystack.length)
        return -1

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle) {
            foundAt = i
            break
        }
    }
    return foundAt
};

console.log(strStr("hello", "ll"))