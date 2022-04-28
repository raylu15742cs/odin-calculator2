// 1. basic arithimetic functions
result = 0;
// a. add
let add = function(one,two) {
    result = one + two;
}
// b. subtract
let subtract = function(one,two) {
    result = one - two;
}
// c. multiply
let multiply = function(one,two) {
    result = one * two;
}
// d. divide
let divide = function(one,two) {
    result = one / two;
}

//2 Operate Function

let operate = function(operator,first,second) {
    if (operator === '+'){
        add(first,second);
    } else if (operator === '-') {
        subtract(first,second);
    } else if (operator === '*') {
        multiply(first,second);
    } else if (operator === '/') {
        divide(first,second);
    }
    return result;
}