/* Print the ratios of positive, negative and zero values in the array.
    Each value should be printed on a separate line with 6 digits after the decimal.
    The function should not return a value.*/

    function ratio(arr){
        let positiveNumbersCount = 0, negativeNumbersCount = 0, zerosCount = 0, lengthOfArray = arr.length;
        let positiveCountRatio, negativeCountRatio, zeroCountRatio;
    
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                positiveNumbersCount += 1;
            }
            else if(arr[i] < 0){
                negativeNumbersCount += 1;
            }
            else {
                zerosCount += 1;
            }
        }
        positiveCountRatio = (positiveNumbersCount / lengthOfArray).toFixed(6);
        negativeCountRatio = (negativeNumbersCount / lengthOfArray).toFixed(6);
        zeroCountRatio =  (zerosCount / lengthOfArray).toFixed(6);
        alert(positiveCountRatio + "\r\n" + negativeCountRatio + "\r\n" + zeroCountRatio)
    
        console.log(positiveCountRatio + "\r\n" + negativeCountRatio + "\r\n" + zeroCountRatio);  // for mac os/linux/unix --> \n
    }
    
    console.log(ratio([-4, 3, -9, 0, 4, 1])); 

//     'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'plusMinus' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function plusMinus(arr) {
//     // Write your code here
//     let positiveNumbersCount = 0, negativeNumbersCount = 0, zerosCount = 0, lengthOfArray = arr.length;
//     let positiveCountRatio, negativeCountRatio, zeroCountRatio;
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             positiveNumbersCount += 1;
//         }
//         else if(arr[i] < 0){
//             negativeNumbersCount += 1;
//         }
//         else {
//             zerosCount += 1;
//         }
//     }
    
//      positiveCountRatio = (positiveNumbersCount / lengthOfArray).toFixed(6);
//     negativeCountRatio = (negativeNumbersCount / lengthOfArray).toFixed(6);
//     zeroCountRatio =  (zerosCount / lengthOfArray).toFixed(6);
    
//     console.log(positiveCountRatio + "\r\n" + negativeCountRatio + "\r\n" + zeroCountRatio); 

// }

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }
