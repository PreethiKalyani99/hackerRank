function minimumBribes(q){
    let bribeCount = 0
    let index 
    for(let i = q.length-1; i >= 0; i--){
        index = i-2
        if((q[i] - i) > 3){
            return "Too chaotic"
        }
        for(let j = (index < 0 ? 0 : index); j < i; j++) {
            if (q[j] > q[i]) {
                bribeCount++;
            }
        }
    }
    return bribeCount;
}
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); 