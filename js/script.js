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

let operate = function(first,second,commands) {
    if (commands === '+'){
        add(first,second);
    } else if (commands === '-') {
        subtract(first,second);
    } else if (commands === '*') {
        multiply(first,second);
    } else if (commands === '/') {
        divide(first,second);
    }
    return result;
}