function salesMatch(arr){
    let pairCount = {}

    arr.reduce((count, currentvalue) => {
       pairCount[currentvalue] = (pairCount[currentvalue] || 0) + 1
    })
    return pairCount
}

console.log(salesMatch([10,20,30,10,20,50,20,30,70]));