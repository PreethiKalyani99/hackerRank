function balancedSums(arr){
    let left = 0, totalsum = 0;
    for(let i = 0; i< arr.length; i++){
        totalsum += arr[i]
    }

    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i]
        if(left === (totalsum - left - currentValue)){
            return 'YES'
        }
        else{
            left += currentValue
        }
    }
    return 'NO'
}
console.log(balancedSums([1,2,3]));
