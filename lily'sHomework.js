function lilysHomework(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let reverseSortedArr = arr.slice().sort((a, b) => b - a);

    function countSwaps(originalArr, sortedArr) {
        let swaps = 0;
        let indexMap = {};
        for (let i = 0; i < originalArr.length; i++) {
            indexMap[originalArr[i]] = i;
        }

        for (let i = 0; i < originalArr.length; i++) {
            if (originalArr[i] !== sortedArr[i]) {
                swaps++;
                let temp = originalArr[i];
                originalArr[i] = originalArr[indexMap[sortedArr[i]]];
                originalArr[indexMap[sortedArr[i]]] = temp;
                indexMap[temp] = indexMap[sortedArr[i]];
            }
        }
        return swaps;
    }
    return Math.min(countSwaps(arr.slice(), sortedArr), countSwaps(arr.slice(), reverseSortedArr));
}


console.log(lilysHomework([3,5,1,2,4]))