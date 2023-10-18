function simpleTextEditor(input){
    let arr = input.split(' ')
    let S = ''
    let strState = []
    
    // type 1 = add string
    // type 2 = delete last k characters in string
    // type 3 = print kth character of string
    // type 4 = undo last operation and assign it as string value

    for(let i = 0; i < arr.length; i++){
        let type = arr[i]
        if(type === '1'){ 
            let str = arr[i+1]
            strState.push(S)
            S += str
            i++
        }
        if(type === '2'){
            let k = Number(arr[i+1])
            strState.push(S)
            S = S.slice(0, -k)
            i++

        }
        if(type === '3'){   
            let num = Number(arr[i+1]) 
            console.log(S.charAt(num - 1))
            i++
        }
        if(type === '4'){
            let lastOperation = strState.pop()
            S = lastOperation
        }
    }
}
simpleTextEditor('8 1 abc 3 3 2 3 1 xy 3 2 4 4 3 1')