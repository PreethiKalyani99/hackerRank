function queue(input){
    let arr = input.replace(/\s+/g, ' ')
    arr = arr.split(' ')
    let enqueue = [], dequeue = []
    
    const type1 = '1', type2 = '2', type3 = '3'
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === type1){
            enqueue.push(arr[i+1])
            i = i+1
        }
        if(arr[i] === type2){
            dequeue.push(enqueue.shift())
        }
        if(arr[i] === type3){
            console.log(enqueue[0])
        }
    }
    
}
let str = '10 1 42 2 1 14 3 1 28 3 1 60 1 78 2 2'
console.log(queue(str))