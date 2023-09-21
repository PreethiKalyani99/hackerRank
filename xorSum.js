function xorSum(n){
    let count = 0;

    while(n > 0) {
        if(n % 2 === 0) {
            count++;
        }
        n = Math.floor(n/2);
    }
    return 2**count;
}

console.log(xorSum(4))