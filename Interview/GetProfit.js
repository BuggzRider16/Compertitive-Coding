// What are the max profit he generated from this (ignoring the losses) using adjacent days

var maxProfit = function (prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i])
            maxProfit += prices[i + 1] - prices[i]
    }
    return maxProfit

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// What can be the max profit he generated

var maxProfitCanGenerate = function (prices) {
    let maxProfit = 0
    let j = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[j]) {
            maxProfit = Math.max(maxProfit, prices[i] - prices[j])
        } else if (prices[i] < prices[j]) {
            j = i
        }
    }
    return maxProfit

};

console.log(maxProfitCanGenerate([45, 24, 35, 31, 40, 38, 11]))


//https://betterprogramming.pub/dynamic-programming-interview-questions-how-to-maximize-stock-profits-8ed4966c2206
//Explainanation -> https://coderbyte.com/algorithm/stock-maximum-profit