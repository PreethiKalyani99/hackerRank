// function median(arr){
//     let newArray = arr.sort()
//     let median = Math.floor(newArray.length / 2);
//     console.log(newArray);
//     return newArray[median]
// }

function quickSelect(arr, low, high){
    let pivot = arr[high], pivotpos = low; 

    for(let i = low; i <= high; i++){
        
        if(arr[i] < pivot){
            let temp = arr[i];
            arr[i] = arr[pivotpos];
            arr[pivotpos] = temp;
            pivotpos++;
        }
    }

    let temp = arr[high];
    arr[high] = arr[pivotpos];
    arr[pivotpos] = temp;

    return pivotpos;
}

function findPosition(arr, low, high, k){
    let index = quickSelect(arr, low, high, k);

    if(index === (k - 1)){
        return arr[index];  
    }
    else if(index < (k - 1)){
       return findPosition(arr, index+1, high, k)
    }
    
    else{
        return findPosition(arr, low, index-1, k)
    }
}

let array = [6,7,23,14,0,8,36,0,1,34,12,932,435,2,0,12,32,43,12,43,6,54,6,3,2,1,0];
let low = 0, high = array.length;
let k = 5;
console.log(array.length);
console.log(findPosition(array,low,high-1,k));
