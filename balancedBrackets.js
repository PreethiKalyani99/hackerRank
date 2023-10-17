function balancedBrackets(s) {
    let stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };
    let strArr = s.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (brackets.hasOwnProperty(strArr[i])) {
            stack.push(strArr[i]);
        } else {
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== strArr[i]) {
                return 'NO';
            }
        }
    } 

    return stack.length > 0 ? 'NO' : 'YES';
}

console.log(balancedBrackets('{{}(')); 
