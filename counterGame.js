function counterGame(n){
    let move = 0;
    while(n > 1) {
        let power = parseInt(Math.log2(n));
        let powerOf2 = 2**power;
        if(n === powerOf2) {
            n  = parseInt(n/2);
        } else {
            n = n - powerOf2;
        }
        move++;
    }
    if(move % 2 === 0) {
        return 'Richard';
    } else {
        return 'Louise';
    }
}
console.log(counterGame(6));
