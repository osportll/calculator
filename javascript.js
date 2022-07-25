let display = document.querySelector('#display');
let numbers = document.querySelectorAll('#numbers');

let operators = document.querySelectorAll('#ope');

let sum = document.querySelector('.add');
let subs = document.querySelector('.substract');
let division = document.querySelector('.divide');
let mult = document.querySelector('.multiply');

function add(...args) {
  return args.reduce((x, y) => {
    return x + y;
  });
}

//console.log(add(3, 3));

function substract(...args) {
  return args.reduce((x, y) => {
    return x - y;
  });
}

//console.log(substract(100, 5));

function divide(...args) {
  return args.reduce((x, y) => {
    return x / y;
  });
}

//console.log(divide(100, 2, 5));

function multiply(...args) {
  return args.reduce((x, y) => {
    return x * y;
  });
}

//console.log(multiply(100, 2));

let result;

function operate(operator, num1, num2) {
  if (operator === '+') {
    result = add(num1, num2);
    console.log(result);
    display.textContent = result;
    return result;
  } else if (operator === '-') {
    result = substract(num1, num2);
    console.log(result);
    display.textContent = result;
    return result;
  } else if (operator === '/') {
    result = divide(num1, num2);
    console.log(result);
    display.textContent = result;
    return result;
  } else if (operator === '*') {
    result = multiply(num1, num2);
    console.log(result);
    display.textContent = result;
    return result;
  }
}

let firstNumber = '';
let secondNumber = '';
let operation;

/* 
   1. If operator is clicked, display.value should be the numbers that are currently on the display. This value should be stored in firstNumber variable.

   2. When a number is cicked AFTER clicking the operator, the display should reset and a new display.value should be created. This new value should be stored in the secondNumber variable.
*/

let operatorIsClicked = false;

numbers.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    let displayValue = buttons.value;
    display.textContent += displayValue;

    if (!operatorIsClicked) {
      firstNumber += displayValue;
      console.log(firstNumber);
    } else {
      secondNumber += displayValue;
      display.textContent = secondNumber;
      console.log(secondNumber);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    operatorIsClicked = true;
    if (operator.className === 'add') {
      operation = '+';
    } else if (operator.className === 'substract') {
      operation = '-';
    } else if (operator.className === 'divide') {
      operation = '/';
    } else if (operator.className === 'multiply') {
      operation = '*';
    }

    if (operator.className === 'equal') {
      return operate(operation, Number(firstNumber), Number(secondNumber));
    }
  });
});
