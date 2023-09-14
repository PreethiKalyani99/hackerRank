function fizzbuzz(n){
    let result = []
    for(let i = 1; i <= n; i++){
       let value = ((i % 3 === 0) && (i % 5 === 0)) ? "FizzBuzz" : (i % 3 === 0) ? "Fizz" : (i % 5 === 0) ? "Buzz" : i
       result.push(value)
    }
    result.forEach(val => {
        console.log(val);
    })
}
fizzbuzz(15)