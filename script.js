// Variables
const clearBtn = document.getElementById('clear');
const allClearBtn = document.getElementById('allClear');
const equalBtn = document.getElementById('equal');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

let userDisplay = document.getElementById('userInput');
let resultDisplay = document.getElementById('userResult');


// Calculation functions
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

// let clearDisplay = ()






// Event Listeners
addBtn.addEventListener('click', add)
subBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
clearBtn.addEventListener('click', clearDisplay)