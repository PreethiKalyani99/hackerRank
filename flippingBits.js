function flippingBits(n) {
   let array = [];

   for(let i = 0; i < n.length; i++){
      array.push(~(n[i]) >>> 0);
   }
   return array
  }
  
const inputNums = [2147483647,1,0];
  const result = flippingBits(inputNums);
  console.log(result); 