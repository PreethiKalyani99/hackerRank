function isValid(s){
    let characterOccurrence = {}

    for(let i = 0; i < s.length; i++){
        let char = s[i]
        characterOccurrence[char] = (characterOccurrence[char] || 0) + 1
    }
    let objectValues = Object.values(characterOccurrence)
    let sortedValues = objectValues.sort((a,b) => {return a-b})
    let length = sortedValues.length
    if(sortedValues[0] === sortedValues[sortedValues.length - 1]){
        return 'YES'
    }
    else if(sortedValues[0] === 1 && sortedValues[1] === sortedValues[length - 1]){
        return 'YES'
    }
    else if((sortedValues[0] === sortedValues[1]) && (sortedValues[1] === sortedValues[length - 2]) && (sortedValues[length - 2] === (sortedValues[length -1] - 1))){
        return 'YES'
    }
    else{
        return 'NO'
    }
    
}
console.log(isValid("aabbccfff"))