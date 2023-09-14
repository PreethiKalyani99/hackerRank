function findingPairs(arr){
    let pairCount = {}
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        pairCount[num] = (pairCount[num] || 0) + 1;
    }

    Object.values(pairCount).filter(value => {
       if(value >= 2){
        count += Math.floor(value/2)
       }
    })
    return count;
}
console.log(findingPairs([10,20,10,30,50,20,10,50,30]));
