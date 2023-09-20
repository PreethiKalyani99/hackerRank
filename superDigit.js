function superDigit(num, k){
    let p = 0;
    for(let i = 0; i < num.length; i++){
        p += Number(num[i])
    }
    console.log(p);
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

    if(digit.length === 1){
        return digit
    }
    else{
        return isSuperDigit(digit,0)
    }
}
console.log(isSuperDigit('8000000',4))