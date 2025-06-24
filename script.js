const display = document.getElementById('display');
const equButton = document.querySelector('#equals');
let inputNum = 0;
let intputFlag = false;
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
            console.log(operator)
            throw new Error("Invalid operator");
    }
}

// Display update and clear functions.
function updateDisplay(digit) {
    if (inputFlag)
    {
        clearDisplay();
        inputFlag = false;
    }
    display.innerHTML += digit;
}

function clearDisplay() {
    display.innerHTML = '';
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


function setOperator(op) {
    inputNum = parseFloat(display.innerHTML);
    if (inputNum != '') {
        operator = op;
        num1 = inputNum;
        inputFlag = true;
    }
}


function deleteLast() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function evaluate(){
    if(num1 != '' && num2 != '' && operator != '')
    {
        inputNum = parseFloat(display.innerHTML);
        num2 = inputNum;
        display.innerHTML = result;
        console.log(`Num1: ${num1}, Num2: ${num2}, Operator: ${operator}`);
        result = operate(operator, num1, num2);
        num1 = result; // Update num1 to the result for subsequent operations
    }   
}

equButton.addEventListener('click', () => {
    inputNum = parseFloat(display.innerHTML);
    num2 = inputNum;
    result = operate(operator, num1, num2);
    display.innerHTML = result;
    console.log(`Num1: ${num1}, Num2: ${num2}, Operator: ${operator}, Result: ${result}`);
});