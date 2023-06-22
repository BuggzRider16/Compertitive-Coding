
var merge = function (nums1, m, nums2, n) {
    if (n === 0) {
        return
    }
    let length = m + n
    let l = m - 1, k = n - 1
    for (let i = length - 1; i => 0; i--) {
        if (k < 0)
            break
        if (nums1[l] >= nums2[k]) {
            nums1[i] = nums1[l]
            l--
        } else if (l === -1 || nums1[l] < nums2[k]) {
            nums1[i] = nums2[k]
            k--
        }
    }
}


const main = () => {
    let nums1 = [0, 0, 0, 0, 0], m = 0, nums2 = [1, 2, 3, 4, 5], n = 5
    merge(nums1, m, nums2, n)
    console.log("Merged Array", nums1)
}

main()