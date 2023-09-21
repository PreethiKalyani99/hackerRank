function isPalindrome(str){
    let string = str.split('').reverse().join('')
   if(str === string){
        return 'Palindrome'
   }
   else{
        return 'Not Palindrome'
   }
}

function splittingArray(s){
    if(s.length <= 100005){
        let position = 0
        let result = isPalindrome(s)
        if(result === 'Palindrome'){
           position = -1
        }
        else{
          let j = s.length - 1
          for(let i = 0; i < s.length; i++){
                if(s[i] !== s[j]){
                    let arr = s.slice(0,i) + s.slice(i+1)
                    result = isPalindrome(arr)
                    position = i
                    if(result !== 'Palindrome'){
                        arr = s.slice(0,j) + s.slice(j+1)
                        result = isPalindrome(arr)
                        position = j
                    }
                }
                j--;
            }
            // let j = s.length - 1
            // for(let i = 0; i < s.length; i++){
            //     if(s[i] !== s[j]){
            //         let arr = s.slice(0,i) + s.slice(i+1)
            //         result = isPalindrome(arr)
            //         position = i
            //         if(result !== 'Palindrome'){
            //             arr = s.slice(0,j) + s.slice(j+1)
            //             result = isPalindrome(arr)
            //             position = j
            //         }
            //     }
            //     j--;
            // }
        }
        return position
    }
    else{
        return "Length is greater than 100005"
    }
}
let value = 'tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt'
console.log(isPalindrome(value))

console.time("end")
console.log(splittingArray(value))
console.timeEnd("end")

function something() {
    console.log("Hello something");
}

console.time('something')
something()
console.timeEnd('something')