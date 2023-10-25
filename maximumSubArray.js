function maximumSubArray(arr){
    let maximum_value = Number.NEGATIVE_INFINITY
    let current_maximum_value = 0
    let subSequence = 0

    for(let i = 0; i < arr.length; i++){
        current_maximum_value += arr[i]
        if(maximum_value < current_maximum_value){
            maximum_value = current_maximum_value
        }
        if(current_maximum_value < 0){
            current_maximum_value = 0
        }
        if(arr[i] > 0){
            subSequence += arr[i]
        }
    }
    if(subSequence === 0){
        subSequence = Math.max(...arr)
    }
    return [maximum_value, subSequence]
}
console.log(maximumSubArray([-1,-2,-3,-4]))