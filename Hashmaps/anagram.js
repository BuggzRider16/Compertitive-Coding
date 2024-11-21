//https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false
    }
    const obj = {}

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]])
            obj[s[i]]++
        obj[s[i]] = 1
    }

    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]])
            obj[t[i]]--
        else
            return false
    }
    return true
};



const  s = "anagram", t = "nagaram"
console.log(isAnagram(s, t))