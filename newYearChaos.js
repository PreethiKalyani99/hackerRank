function minimumBribes(q){
    let bribeCount = 0

    for(let i = q.length-1; i >= 0; i--){
        if((q[i] - i) > 3){
            return "Too chaotic"
        }
        for(let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribeCount++;
            }
        }
    }
    return bribeCount;
}
console.log(minimumBribes([2,5,1,3,4])); 