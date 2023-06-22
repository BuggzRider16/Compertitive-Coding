var mySqrt = function(x) {
    let start = 0;
    let end = x;
    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        const candidate = middle * middle;
        if (candidate == x) {
            return middle;
        } else if (candidate > x) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    
    return end;
};

console.log(mySqrt(8))