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