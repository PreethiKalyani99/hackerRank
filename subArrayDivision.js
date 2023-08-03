/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. */

function subArrayDivision(s,d,m){
    let ways = 0;

    for(let i = 0; i < s.length; i++){
        let arrCombo = s.slice(i, i+m);
        let sum = arrCombo.reduce((a,b) => a + b);

        if(sum === d){
            ways++
        }
    }
    return ways;
}

const s = [2,2,1,3,2], d = 4, m = 2;
console.log(subArrayDivision(s,d,m));