// Variables
const clearBtn = document.getElementById('clear');
const allClearBtn = document.getElementById('allClear');
const equalBtn = document.getElementById('equal');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let userDisplay = document.getElementById('userInput');
let resultDisplay = document.getElementById('userResult');


// Calculation functions
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

digits.forEach(button =>{
    button.addEventListener('click', () =>{
        userDisplay.innerText = (button.innerText)
    })
})
