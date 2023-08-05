function countingSort(arr){
    const max = Math.max(...arr);
    const totalLength = max + 1;
    let result = new Array(totalLength).fill(0);

    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] || arr[i] === 0){
            result[arr[i]]++;
        }
    }

    return result;
}
console.log(countingSort([3,6,10,2]));