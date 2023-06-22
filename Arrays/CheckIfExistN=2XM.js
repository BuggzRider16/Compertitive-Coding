var checkIfExist = function(arr) {
    const obj = {}
    for(let i = 0; i< arr.length; i++){
        if(typeof (obj[arr[i]*2]) !== 'undefined'|| typeof (obj[arr[i]/2]) !== 'undefined')
            return true
            obj[arr[i]]=i
    }
    return false
}

const main = () => {
    const nums = [7,1,14,11]
    const ans = checkIfExist(nums)
    console.log("Answer is", ans)
}

main()