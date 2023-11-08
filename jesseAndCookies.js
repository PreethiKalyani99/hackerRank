//Need to optimize 

function insertvalueInArray(arr, value){
    if(value <= arr[0]){
        arr.unshift(value)
        return arr
    }
    if(value >= arr[arr.length - 1]){
        arr.push(value)
        return arr
    }
   for(let i = 0; i < arr.length; i++){
       if(value < arr[i]){
            arr.splice(i, 0, value)
            return arr
        }
    }
}

function cookies(k,A){
   let count = 0
    A = A.sort((a,b) => {return a-b})
    if(A[0] >= k){
        return 0
    }
    while ((A.length > 1) && (A[0] < k)){
        let value = A.shift() + (2 * A.shift())
        if(A.length >= 1) {
            A = insertvalueInArray(A, value)
        }
        else{
            A = [value]
        }
        count++
    }
    if(A[0] < k){
        return -1
    }
    return count
}
console.log(cookies(9, [1,1,1]))
console.log(cookies(90, [13,47,74,12,89,74,18,38]))
// console.log(cookies(3581, [6214,8543,9266,1150,7498,7209,9398,1529,1032,7384,6784,34,1449,7598,8795,756,7803,4112,298,4967,1261,1724,4272,1100,9373]))
// console.log(cookies(47245, [3554,2227,8866,9890,212,8669,2423,7651,3878,3379,1419,6134,5767,859,2848,9309,1449,8408,8041,3367,6676,6382,4136,4871]))
// console.log(cookies(2280, [9660,9902,5775,2183,3974,7742,576,8786,7615,5575,6287,5495,161,3520,344,805,786,3802,4843,7424,634,7916,6989,3499,1216,1293,9965,6299,7899,4763,7272,9785,8469,395,1034,8763,8003,9464,5081,2064,4401,6850,8792,1603,7547,3354,8827,887,8151,2470,9995,7228,8198,5600,1829,8814,5282,3930,2481,6873,9165,497,2158,1752,878,8448,7862,7685,7988,3536,8227,8863,8663,1823,8510,7065,6927,610,4220,7096,7685,6992,976,5081,2389,1844,9843,8741,9582,3479,420,4136]))
// console.log(cookies(10, [1,1,1, 1]))
// console.log(cookies(10, [0,0,0, 0]))
