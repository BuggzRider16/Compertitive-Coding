//https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }
    const obj = {}

    for (let i = 0; i < magazine.length; i++) {
        if (obj[magazine[i]]) {
            obj[magazine[i]]++
        } else {
            obj[magazine[i]] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (obj[ransomNote[i]] && obj[ransomNote[i]] > 0) {
            obj[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
};

var canConstruct1 = function(ransomNote, magazine) { //perfect from js
    let i = 0, r = '';
    while(r = ransomNote[i]) {
        if(magazine.indexOf(r) === -1) return false;
        magazine = magazine.replace(r,'');
        i++;
    }
    return true;
};
const ransomNote = "aa", magazine = "aab"
console.log(canConstruct1(ransomNote, magazine))