const display = document.getElementById('display');
const equButton = document.querySelector('#equals');
const dotbutton = document.querySelector('#dot')
let evalFlag = false;
let inputFlag = false;
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
        display.innerHTML = "Cannot divide by zero";
        inputFlag = true;
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
            console.log(operator)
            throw new Error("Invalid operator");
    }
}

// Display update and clear functions.
function updateDisplay(digit) {
    if (inputFlag) clearDisplay();
    if (evalFlag) clearAll(); 
    display.innerHTML += digit;
    if (digit == '.') dotbutton.disabled = true;
}
function clearDisplay() {
    display.innerHTML = '';
    dotbutton.disabled = false;
    inputFlag = false;
}
function resetNum() {
    inputNum = 0;
    result = 0;
    num2 = '';
    operator = '';
}
function clearAll() {
    clearDisplay();
    resetNum();
}
function deleteLast() {
    if (display.innerHTML.slice(-1) == '.') dotbutton.disabled = false;
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function setOperator(op) {
    inputNum = parseFloat(display.innerHTML);
    if (inputNum != '') {
        operator = op;
        num1 = inputNum;
        inputFlag = true;
    }
}

function equate(){
    if (inputFlag) clearDisplay();
    else
    {
        inputNum = parseFloat(display.innerHTML);
        num2 = inputNum;
        if(num1 != '' && num2 != '' && operator != '')
            {
                display.innerHTML = result;
                console.log(`Num1: ${num1}, Num2: ${num2}, Operator: ${operator}, Result: ${result}`);
                result = operate(operator, num1, num2);
                num1 = result; // Update num1 to the result for subsequent operations
            }   
    }
}