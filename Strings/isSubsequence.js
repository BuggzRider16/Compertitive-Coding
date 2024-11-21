//https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

var isSubsequence = function (s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
            j++
        }
    }
    return j === s.length
};
const s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t))