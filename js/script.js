let input = document.querySelector('.input');
let score = document.querySelector('.runningscore');
let first = 0;
let second =0;
let command = '';
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
    if (operator === " + " ){
        add(first,second);
    } else if (operator === ' - ') {
        subtract(first,second);
    } else if (operator === ' * ') {
        multiply(first,second);
    } else if (operator === ' / ') {
        divide(first,second);
    }
    input.innerHTML = result;
}
const numberListen = document.querySelectorAll('.number');
numberListen.forEach(item => {item.addEventListener('click', event => {
    score.innerHTML += item.innerHTML;
    input.innerHTML += item.innerHTML;
    })
})
const operatorListen = document.querySelectorAll('.operator');
operatorListen.forEach(item => {item.addEventListener('click', event => {
    score.innerHTML += item.innerHTML;
    first = input.innerHTML;
    input.innerHTML = '';
    command = item.innerHTML;
    })
})
const evaluateListen = document.querySelectorAll('.evaluate');
evaluateListen.forEach(item => {item.addEventListener('click', event => {
    second = input.innerHTML;
    operate(command, first , second);
    })
})
const clearListen = document.querySelectorAll('.clear');
clearListen.forEach(item => {item.addEventListener('click', event => {
    score.innerHTML ='';
    item.innerHTML ='';
    })
})