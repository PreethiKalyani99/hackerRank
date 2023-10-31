function findMinfromMax(arr, queries){
    let minArr = []
    let maxValue = 0
    let isMaxAtBeginning = false;
    
    for(let i = 0; i < queries.length; i++){
        const q = queries[i]
        let maxArr = []
        
        for(let j = 0; j <= arr.length - q; j++){
            if(j === 0 || isMaxAtBeginning){
                let temp = arr.slice(j, j + q)
                maxValue = Math.max(...temp)
            }
            else{
                let temp = [maxValue, arr[j+q-1]]
                maxValue = Math.max(...temp)      
            }
            maxArr.push(maxValue)
            isMaxAtBeginning = maxValue === arr[j];
        }
        minArr.push(Math.min(...maxArr));
    }
    return minArr
}
console.log(findMinfromMax([33,11,44,11,55], [3]))