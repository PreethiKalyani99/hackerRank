function superDigit(num, k){
    let p;
    // for(let i = 0; i < num.length; i++){
    //     p += Number(num[i])
    // }
    p = num.split('').reduce((acc, cur) => {return acc + Number(cur)},0 )
    if(k > 0){
       p = p * k
    }
    return p.toString()
}

function isSuperDigit(num, k){
    if(num.length === 1){
        return num;
    }

    let digit = superDigit(num, k)

    return isSuperDigit(digit,0)
}
console.log(isSuperDigit('9875',4))