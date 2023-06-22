
function memoize(fn) {
    const res = {}
    return function (...args) {
        let argsCache = JSON.stringify(args)
        if (!res[argsCache]) {
            res[argsCache] = fn.call(this, ...args)
        }
        return res[argsCache]
    }
}


const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) {
        return num1 * num2
    }
}

const memoizedClumsyProduct = memoize(clumsyProduct)

console.time("First Call")
console.log(memoizedClumsyProduct(9467, 7649))
console.timeEnd("First Call")

console.time("Second Call")
console.log(memoizedClumsyProduct(9467, 7649))
console.timeEnd("Second Call")