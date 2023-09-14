function zigZagSequence(arr){
    let midValue = ((arr.length + 1) / 2) - 1;
    let sortedArr = arr.sort()
    
    let temp = sortedArr[midValue];
    sortedArr[midValue] = sortedArr[arr.length - 1];
    sortedArr[arr.length - 1] = temp;
    
    let firstHalf = sortedArr.slice(0, midValue+1)
    let secondHalf = []
    for(let i = arr.length - 2; i > midValue; i--){
        secondHalf.push(arr[i])
    }
    return [...firstHalf,...secondHalf,sortedArr[sortedArr.length - 1] ]
}

console.log(zigZagSequence([2,3,5,1,4,6,7]));