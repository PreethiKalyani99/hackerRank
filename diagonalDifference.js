function diagonalDifference(arr){
    let primaryDiagonalCount = 0, secondaryDiagonalCount = 0;

    for(let i = 0; i < arr.length; i++){
        primaryDiagonalCount += arr[i][i];
        secondaryDiagonalCount += arr[i][(arr.length - 1) - i]
    }
   return   Math.abs(primaryDiagonalCount - secondaryDiagonalCount)

    // instead of line 8 9 10 -> Math.abs(primaryDiagonalCount - secondaryDiagonalCount)
    
}

let array = [ [11,2,4], [4,5,6], [10,8,-12] ]
console.log(diagonalDifference(array))