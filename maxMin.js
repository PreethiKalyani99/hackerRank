function maxMin(arr, k){
    let newArr = arr.sort((a,b) => {
        return a - b
    });
    let minMaxDiff = []

    for(let i = 0; i <= newArr.length - k; i++){
        minMaxDiff.push(newArr[i + k -1] - newArr[i])
    }
    let minValue = Math.min(...minMaxDiff)
    console.log(minMaxDiff);
    return minValue
}
console.log(maxMin([21,4,45,6,3,8,1,8], 3)); 
// 1,3,4,6,8,8,21,45  (8 - 2)  => 6 -> length  k = 2                    (8 - 3) => 5 -> length  k = 3
// 0 1 2 3 4 5  6  7


//0 -> a[0 + 2 - 1] - a[0] => a[1] - a[0] -> 3 - 1 = 2             0 -> a[0 + 3 - 1] - a[0] => a[2] - a[0] -> 4 - 1 = 3 
//1 -> a[1 + 2 -1] - a[1] => a[2] - a[1] -> 4 - 3 = 1              1 -> a[1 + 3 -1] - a[1] => a[3] - a[1] -> 6 - 3 = 3
//2 -> a[2 + 2 - 1] - a[2] => a[3] - a[2] -> 6 - 4 = 2             2 -> a[2 + 3 - 1] - a[2] => a[4] - a[2] -> 8 - 4 = 4
//3 -> a[3 + 2 - 1] - a[3] => a[4] - a[3] -> 8 - 6 = 2             3 -> a[3 + 3 - 1] - a[3] => a[5] - a[3] -> 8 - 6 = 2
//4 -> a[4 + 2 - 1] - a[4] => a[5] - a[4] -> 8 - 8 = 0             4 -> a[4 + 3 - 1] - a[4] => a[6] - a[4] -> 21 - 8 = 13
//5 -> a[5 + 2 - 1] - a[5] => a[6] - a[5] -> 21 - 8 = 13           5 -> a[5 + 3 - 1] - a[5] => a[7] - a[5] -> 45 - 8 = 37
//6 -> a[6 + 2 - 1] - a[6] => a[7] - a[6] -> 45 - 21 = 24

//Math.min([2,1,2,2,0,13,24]) => min value = 0
 