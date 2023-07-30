function xorString(a,b){
   let binaryValue1 = a.toString();
   let val1 = binaryValue1.split('')

   let binaryValue2 = b.toString();
   let val2 = binaryValue2.split('')

   let xor_string = []
   let maxLength = Math.max(val1.length,val2.length)
   for(let i = 0; i < maxLength; i++){
        const newVal1 = val1[i] || '0';
        const newVal2 = val2[i] || '0';

        if(newVal1 === newVal2){
            xor_string.push('0');
        }
        else{
            xor_string.push('1')
        }
   }
   return xor_string.join('')
}

const a = '10101', b = '00101';
console.log(xorString(a,b));
