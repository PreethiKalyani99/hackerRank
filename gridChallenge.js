function gridChallenge(grid){
    let stringArray = []
    for(let i = 0; i < grid.length; i++){
        let ch = grid[i].split('')
        stringArray.push(ch)
    }
   for(let i = 0; i < stringArray.length; i++){
        stringArray[i].sort()
   }
    let column = stringArray[0].length
    for(let i = 0; i < stringArray.length-1; i++){
        for(let j = 0; j < column; j++){
            if(stringArray[i][j].charCodeAt() > stringArray[i+1][j].charCodeAt()){
                return 'NO'
            }
        }
    }
    return 'YES'
}

const grid = ['bca', 'hjk','qmp','rtv']
console.log(gridChallenge(grid));