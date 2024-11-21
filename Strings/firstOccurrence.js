//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

var strStr = function (haystack, needle) {
    let needleLength = needle.length

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needleLength) === needle)
            return i
    }
    return -1
};
const haystack = "sadbutsad", needle = "but"
console.log(strStr(haystack, needle))