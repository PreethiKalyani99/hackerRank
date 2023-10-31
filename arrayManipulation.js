//  Time complexity O(n^2)

function arrayManipulation(n, queries){
    let array = new Array(n).fill(0)
    let maxValue = 0

    for(let i = 0; i < queries.length; i++){
        for(let j = queries[i][0] - 1; j < queries[i][1]; j++){
            array[j] +=  queries[i][2]
            maxValue = Math.max(maxValue, array[j])
        }
    }
    return maxValue
}
console.log(arrayManipulation(5, [[1,2,100],[2,3,100],[3,4,100]]))

// Time complexity O(n)

function arrayManipulation(n, queries){
    const arr = []
    let maxValue = 0,
    currentNumber = 0;
    queries.forEach(([startRange, endRange, value]) => {
            arr[startRange] = arr[startRange] || { start: 0, end: 0 };
            arr[endRange] = arr[endRange] || { start: 0, end: 0 };
            arr[startRange].start += value;
            arr[endRange].end += value;
        });
    arr.forEach((cell) => {
        if (cell) {
            currentNumber += cell.start;
            if (currentNumber > maxValue) {
            maxValue = currentNumber;
            }
            currentNumber -= cell.end;
        }
    });
    return maxValue;
}
console.log(arrayManipulation(10, [[1,5,3],[5,8,7],[6,9,1]]))