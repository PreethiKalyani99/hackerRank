function lonelyInteger(arr){
    const repeatedCount = {};
    let uniqueIntegers = []

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        repeatedCount[num] = (repeatedCount[num] || 0) + 1;
        console.log(repeatedCount);
    }

   for(const [key, value] of Object.entries(repeatedCount)){
        if(value === 1){
            uniqueIntegers.push(Number(key))
        }
   }
   return uniqueIntegers
}

const myArray = [0,0,1,2,2,5];
console.log(lonelyInteger(myArray));