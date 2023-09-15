function dynamicArray(n, queries){
    let lastAnswer = 0;
    let newArr = []
    let lastAnswerArray = []

    for(let i = 0; i < n; i++){
        newArr.push([])
    }
    // console.log(newArr);
    let queryType, x, y;
    for(let i = 0; i < queries.length; i++){
        queryType = queries[i][0]
        x = queries[i][1]
        y = queries[i][2]
        let idx = (x ^ lastAnswer) % n
        if(queryType === 1){
            newArr[idx].push(y)
        }
        else{
            lastAnswer = newArr[idx][y % (newArr[idx].length)]
            lastAnswerArray.push(lastAnswer)
        }
    }
    return lastAnswerArray
}

let queries = [[ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ], [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]
dynamicArray(10, queries)