function caesarCipher(str, count){
    if(count > 26){
        count = count % 26
    }
    let encryptedMessage = []
    
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i)
        if(code > 64 && code < 91){
            code = code + count;
            if(code > 90){
              code = (code % 90) + 64;
            }
            encryptedMessage.push(String.fromCharCode(code))
        }
        else if(code > 96 && code < 123){
            code = code + count;
            
            if (code > 122){
                code = (code % 122) + 96
            }
            encryptedMessage.push(String.fromCharCode(code))
        }
        else{
            encryptedMessage.push(str[i])
        }
    }
    console.log(encryptedMessage.length, str.length);
    return encryptedMessage.join('')
}

console.log(caesarCipher("www.abc.xy", 87));
