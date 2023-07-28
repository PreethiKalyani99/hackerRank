/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function findMinMax(array) {
    let totalSum = 0;
    let minSum = 0;
    let maxSum = 0;
  
    for (let i=0;i<array.length;i++) {
      totalSum += array[i];
    }

    minSum = totalSum;

    for (let j = 0; j < array.length; j++) {
      const currentSum = totalSum - array[j];
      minSum = Math.min(minSum, currentSum);
      maxSum = Math.max(maxSum, currentSum);
    }
    console.log(`Minimum sum: ${minSum}` + "\n" + `Maximum sum: ${maxSum}`);
}
  
const array = [2,3,5,5,1];
findMinMax(array);
