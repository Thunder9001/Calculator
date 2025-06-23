const display = document.getElementById('display');
const equButton = document.querySelector('#equals');
let inputNum = 0;
let result = 0;
let num1 = '';
let num2 = '';
let operator = '';

function add(a, b) {
    return Math.round((a + b + Number.EPSILON) * 1000) / 1000; // Round to 3 decimal places
}

function subtract(a, b) {
    return Math.round((a - b + Number.EPSILON) * 1000) / 1000; // Round to 3 decimal places
}

function multiply(a, b) {
    return Math.round((a * b + Number.EPSILON) * 1000) / 1000; // Round to 3 decimal places
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return Math.round((a / b + Number.EPSILON) * 1000) / 1000; // Round to 3 decimal places
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
}

function updateDisplay(digit) {
    display.innerHTML += digit;
}

function resetNum() {
    inputNum = 0;
    result = 0;
    num2 = '';
    operator = '';
}

function setOperator(op) {
    if (operator !== '') {
        evaluate();
    }
    if (inputNum !== '') {
        inputNum = parseFloat(display.innerHTML);
        operator = op;
        num1 = inputNum;
        clearDisplay();
    }
}

function clearDisplay() {
    display.innerHTML = '';
}

function evaluate(){
    inputNum = parseFloat(display.innerHTML);
    num2 = inputNum;
    result = operate(operator, num1, num2);
    display.innerHTML = result;
    operator = '';
    console.log(`Num1: ${num1}, Num2: ${num2}, Operator: ${operator}`);
    num1 = result; // Update num1 to the result for subsequent operations
    num2 = '';

}

equButton.addEventListener('click', () => {
    inputNum = parseFloat(display.innerHTML);
    num2 = inputNum;
    result = operate(operator, num1, num2);
    display.innerHTML = result;
    operator = '';
    console.log(`Num1: ${num1}, Num2: ${num2}, Operator: ${operator}, Result: ${result}`);
});