function getPrimes(n){
    let primesStr = []
    for (let num = 2; num <= 10000; num++) {
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
            isPrime = false;
            break;
            }
        }

        if (isPrime) {
            primesStr.push(num)
        }
    }
    return primesStr.slice(0,n);
}

function waiter(number, q){
    let primeNumbers = getPrimes(q), currentArr = number, notDivisibleNumbers = [], answer = [], count = 0
    while(q > count){
        let divisibleNumbers = []
        let prime = primeNumbers[count]
        
        while(currentArr.length){
            let num = currentArr.pop()
            if(num % prime === 0){
                divisibleNumbers.push(num)
            }
            else{
                notDivisibleNumbers.push(num)
            }
        }
        currentArr = notDivisibleNumbers
        notDivisibleNumbers = []
        answer = [...answer,...divisibleNumbers.reverse()]
        count++
    }
    return [...answer, ...currentArr.reverse()]
}

console.log(waiter([3,3,4,4,9], 2))
