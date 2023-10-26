function qHeap1(input){
    let arr = input.replace(/\s+/g, ' ')
    arr = arr.split(' ')
    let heap = [], minimumValue = Infinity

    for(let i = 0; i < arr.length; i++){
        let type = arr[i]
        if(type === '1'){
            let addValue = Number(arr[i+1])
            heap.push(addValue)
            minimumValue = Math.min(addValue, minimumValue)
            i++
        }
        if(type === '2'){
            let removeValue = Number(arr[i+1])
            heap = heap.filter(value => value !== removeValue)
            if(removeValue === minimumValue){
                minimumValue = Math.min(...heap)
            }
            i++
        }
        if(type === '3'){
            console.log(minimumValue)
        }
    }
}
qHeap1(`5
1 4
1 9
3
2 4
3`)