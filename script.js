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
let equalIsPressed = false;
let firstNumber = '';
let secondNumber = '';
let operator = '';


// Calculation functions
let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;
let modulus = (n1, n2) => n1 % n2;
let exponent = (n1, n2) => Math.pow(n1, n2);

const Calculation = (n1, n2, operator) => {
    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            if (secondNumber == 0) {
                userDisplay.innerText = 'Error'
                alert('Cannot divide by 0')
            }
            return divide(n1, n2);
        case '%':
            return modulus(n1, n2);
        case '^':
            return exponent(n1, n2);

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
            let display = `${firstNumber} ${operator}`
            userDisplay.innerText = display
        } else {
            let answer = Calculation(Number(firstNumber), Number(secondNumber), operator)
            resultDisplay.innerText = ` = ${answer}`;
            firstNumber = answer;
            secondNumber = '';
            operator = opr.textContent;
        };
    });
});


let allClear = () => {
    firstNumber = '';
    secondNumber = '';
    userDisplay.textContent = 0;
    resultDisplay.textContent = '';
    operator = '';
}

allClearBtn.addEventListener('click', () => allClear());