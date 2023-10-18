function salesMatch(arr){
    let pairCount = {}, count = 0

    arr.reduce((count, currentvalue) => {
       pairCount[currentvalue] = (pairCount[currentvalue] || 0) + 1
    },0)


    Object.values(pairCount).filter(num => {
       if(num > 1){
        count += Math.floor(num / 2)
       }
    })
    return count 
}

console.log(salesMatch([10,20,30,10,20,50,20,30,70]));