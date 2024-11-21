//https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

var wordPattern = function (pattern, s) {
    const words = s.split(" ");

    // If the pattern and the words array lengths are not the same, return false
    if (pattern.length !== words.length) return false;

    // Use Maps instead of objects to avoid issues with reserved words like "constructor"
    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if there is an inconsistency in mapping from character to word
        if ((charToWord.has(char) && charToWord.get(char) !== word) || (wordToChar.has(word) && wordToChar.get(word) !== char))
            return false;

        // Map character to word and word to character
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
};


const pattern = "abba", s = "dog constructor constructor dog"
console.log(wordPattern(pattern, s))