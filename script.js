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
        default: result = (bigDisplay.textContent || "0");
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
let result;
let equalKeyPressed = false;
let decimalPointClick = false;

numKeys.forEach( (key) => {
    key.addEventListener('click', updateDisplay)
});

function updateDisplay(event) {
    if(equalKeyPressed) {
        clearDisplay();
        equalKeyPressed = false;
    }
    bigDisplay.textContent += event.target.textContent;
    numLog += event.target.textContent;
}

const operatorKeys = document.querySelectorAll('.operator');

operatorKeys.forEach( (key) => {
    key.addEventListener('click', handleOperatorClick)
});

function handleOperatorClick(event) {
    if(equalKeyPressed) {
        clearDisplay();
        equalKeyPressed = false;
    }
    if(operatorCount) {
        calcAndDisplay();
        numLog = result;
    }
    num1 = Number(numLog);
    numLog = "";
    decimalPointClick = false;
    operator = event.target.textContent; 
    bigDisplay.textContent += event.target.textContent;
    operatorCount++;
}

const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    calcAndDisplay();
    equalKeyPressed = true;
});

function calcAndDisplay() {
    num2 = Number(numLog);
    if((operator === '/') && (num2 === 0)) {
        clearDisplay();
        alert("YOU ARE HACKED!");
        return;
    }
    numLog = "";
    result = operate(operator, num1, num2);
    smallDisplay.textContent = bigDisplay.textContent + '=';
    bigDisplay.textContent = round(result);
}

const clear = document.querySelector('.clear');

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    numLog = "";
    bigDisplay.textContent = "";
    smallDisplay.textContent = "";
    operatorCount = 0;
    decimalPointClick = false;
}

function round(x) {
    let digit = Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    let digitsAfterDecimal = 12 - digit;           //number of decimal places to round off to, to keep count below 13
    return Math.floor(x * (10 ** digitsAfterDecimal)) / (10 ** digitsAfterDecimal);
}

const decimalPoint = document.querySelector('.decimal-point');

decimalPoint.addEventListener('click', (e) => {
    if(decimalPointClick) return;
    bigDisplay.textContent += e.target.textContent;
    numLog += e.target.textContent;
    decimalPointClick = true;
});