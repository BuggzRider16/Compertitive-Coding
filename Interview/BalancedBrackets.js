const BalancedBrackets = (str) => {
    const stack = []

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
            continue
        }

        if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false
            }
            const poppedValue = stack.pop()
            switch (char) {
                case ')':
                    if (poppedValue !== '(')
                        return false
                    break
                case ']':
                    if (poppedValue !== '[')
                        return false
                    break
                case '}':
                    if (poppedValue !== '{')
                        return false
                    break
            }
        }
    }
    if (stack.length === 0) {
        return true
    }
}

console.log('Are brackets balanced', BalancedBrackets('[(])'))

/*
[(]) -> false
[()] -> true

*/