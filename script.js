// Variables
const clearBtn = document.getElementById('clear');
const allClearBtn = document.getElementById('allClear');
const equalBtn = document.getElementById('equal');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const digitsBtn = document.querySelectorAll('.digit');
const operationBtn = document.querySelectorAll('.operator');

let userDisplay = document.getElementById('userInput');
let resultDisplay = document.getElementById('userResult');
let firstNumber = '';
let secondNumber = '';
let operator = '';


// Calculation functions
let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;

const Calculation = (n1, operation, n2) => {
    switch (operation) {
        case 'add':
            return add(n1, n2);
        case 'subtract':
            return subtract(n1, n2);
        case 'multiply':
            return multiply(n1, n2);
        case 'divide':
            return divide(n1, n2);
    };
};

// Number buttons
digitsBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operator === '') {
            firstNumber += e.target.innerText;
            userDisplay.innerText = firstNumber;
        } else {
            secondNumber += e.target.innerText;
            userDisplay.innerText = `${firstNumber} ${operator} ${secondNumber}`
        };
    });
});

// operator buttons
operationBtn.forEach(opr => {
    opr.addEventListener('click', (e) => {
        if (e.target.innerText !== '=') {
            operator = e.target.innerText
            userDisplay.innerText = `${firstNumber} ${operator}`
        } else {
            userDisplay.innerText = Calculation(firstNumber, operator, secondNumber);
            
        };
    });
});