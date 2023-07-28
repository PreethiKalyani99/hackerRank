function sparseArray(strings, queries){
    let count = 0, countArray = [];

    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < strings.length; j++){
            if(queries[i] === strings[j]){
                count ++;
            }
        }
        countArray.push(count);
        count = 0;
    }
    return countArray;
}

console.log(sparseArray(['ab','ab','abc'], ['ab','abc','bc']).join("\n"));