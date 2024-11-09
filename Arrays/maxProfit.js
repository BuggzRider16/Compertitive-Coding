//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

var maxProfit = function (prices) {
    let min = Infinity, max = 0, profit = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        profit = prices[i] - min
        max = Math.max(max, profit)
    }
    return max
};


const inputArray = [7,1,5,3,6,4]
console.log(maxProfit(inputArray))