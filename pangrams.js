function pangrams(inputString){
    const filteredString = inputString.replace(/[^a-zA-Z]/g, '');
    const uniqueCharacters = new Set(filteredString.toLowerCase());
    const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
    let missingCharacters = []

    for(const char of alphabet){
        if(!uniqueCharacters.has(char)){
            missingCharacters.push(char)
        }
    }
    if(missingCharacters.length > 0){
        return `Missing character(s): ${missingCharacters}. Not pangram.`
    }
    return 'The given string is a pangram!'
}

const inputString = 'e promptly judged antiquer32234 ivory buckles for the pri4324234';
console.log(pangrams(inputString));