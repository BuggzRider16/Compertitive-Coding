//https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150

var isIsomorphic = function (s, t) {
    const obj = {}
    const obj1 = {}

    for (let i = 0; i < s.length; i++) {
        if ((obj[s[i]] && obj[s[i]] !== t[i]) || (obj1[t[i]] && obj1[t[i]] !== s[i]))
            return false
        obj[s[i]] = t[i]
        obj1[t[i]] = s[i]
    }
    return true
};

//optimised solution in js
var isIsomorphic1 = function(s, t) { 
    let set1 = new Set(s.split(''));
    let set2 = new Set(t.split(''));

    let arr1= [...set1];
    let arr2 = [...set2];

    let obj={};

    for(let i=0;i<arr1.length;i++) {
        obj[arr1[i]] ? null : obj[arr1[i]] = arr2[i]
    }
    //here we are checking that if we transform each char of s using obj mapping, the resultant string should be equal to t
    return s.split('').map((el)=>obj[el]).join('') ==t ? true : false;
};


s = "badc", t = "baba"
console.log(isIsomorphic(s, t))