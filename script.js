function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(op, a, b) {
    let result;
    switch(op) {
        case '+': result = add(a, b); 
            break;
        case '-': result = subtract(a, b); 
            break;
        case '*': result = multiply(a, b); 
            break;
        case '/': result = divide(a, b); 
            break;
        default: console.error("Invalid Operator!")
    }
    return result;
}

const bigDisplay = document.querySelector('.display .big');
const smallDisplay = document.querySelector('.display .small');
const numKeys = document.querySelectorAll('.keys .num');

let num1;
let num2;
let operator = "";
let numLog = "";
let operatorCount = 0;

numKeys.forEach( (key) => {
    key.addEventListener('click', updateDisplay)
});

function updateDisplay(event) {
    bigDisplay.textContent += event.target.textContent;
    numLog += event.target.textContent;
}

const operatorKeys = document.querySelectorAll('.operator');

operatorKeys.forEach( (key) => {
    key.addEventListener('click', handleOperatorClick)
});

function handleOperatorClick(event) {
    if(operatorCount) {
        calcAndDisplay();
        operator = event.target.textContent; 
        bigDisplay.textContent += event.target.textContent;
    }
    num1 = Number(numLog);
    numLog = "";
    operator = event.target.textContent; 
    bigDisplay.textContent += event.target.textContent;
    operatorCount++;
}

const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    num2 = Number(numLog);
    numLog = "";
    let result = operate(operator, num1, num2);
    smallDisplay.textContent = bigDisplay.textContent + '=';
    bigDisplay.textContent = result;
});

function calcAndDisplay() {
    num2 = Number(numLog);
    numLog = "";
    let result = operate(operator, num1, num2);
    smallDisplay.textContent = bigDisplay.textContent + '=';
    bigDisplay.textContent = result;
}

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    numLog = "";
    bigDisplay.textContent = "";
    smallDisplay.textContent = "";
});