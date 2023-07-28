/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function findMinMax(array) {
    let totalSum = 0;
    let currentSum = [];
  
    for (let i=0;i<array.length;i++) {
      totalSum += array[i];
    }

    for (let j = 0; j < array.length; j++) {
      currentSum.push(totalSum - array[j]);
    }
   let minSum = Math.min(...currentSum);
   let maxSum = Math.max(...currentSum)
    console.log(`Minimum sum: ${minSum}` + "\n" + `Maximum sum: ${maxSum}`);
}
  
const array = [2,3,5,5,1];
findMinMax(array);
