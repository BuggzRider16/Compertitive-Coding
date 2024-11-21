var isHappy = function (n) {
    if (n === 1)
        return true
    const obj = {}
    let number = n

    while (true) {
        let sum = 0
        while (number > 0) {
            const digit = number % 10;
            sum = sum + (digit * digit)
            number = parseInt(number / 10)
        }
        if (sum === 1)
            return true
        if (obj[sum])
            return false
        else {
            obj[sum] = sum
            number = sum
        }
    }
};


/* Yes, your solution can be optimized. Specifically, we can use Floyd’s Cycle Detection Algorithm (commonly used in linked lists)
 to detect the cycle in the sequence of sums of squares of digits. This eliminates the need for a hash table, reducing the space
  complexity to O(1), while the time complexity remains O(log n) due to the digit manipulation.*/
var isHappy1 = function (n) {
    const getNext = (num) => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let slow = n;
    let fast = getNext(n);

    // Use two pointers: slow moves one step, fast moves two steps
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);       // Slow pointer moves one step
        fast = getNext(getNext(fast)); // Fast pointer moves two steps
    }

    return fast === 1; // If fast reaches 1, it's a happy number
};

console.log(isHappy(3))