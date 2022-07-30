let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let operators = document.querySelectorAll('.ope');
let sum = document.querySelector('.add');
let subs = document.querySelector('.substract');
let division = document.querySelector('.divide');
let mult = document.querySelector('.multiply');

let lalas = document.querySelectorAll('.lala');

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

let operateResult;

function operate(operator, num1, num2) {
  if (operator === '+') {
    return (operateResult = add(num1, num2));
  } else if (operator === '-') {
    return (operateResult = substract(num1, num2));
  } else if (operator === '/') {
    return (operateResult = divide(num1, num2));
  } else if (operator === '*') {
    return (operateResult = multiply(num1, num2));
  }
}

let firstNumber = '';
let secondNumber = '';
let operation;
let operatorIsClicked = false;

numbers.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    let displayValue = buttons.value;
    display.textContent += displayValue;

    if (!operatorIsClicked) {
      firstNumber += displayValue;
      console.log(firstNumber);
    } else if (operatorIsClicked) {
      secondNumber += displayValue;
      display.textContent = secondNumber;
      console.log(secondNumber);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    operatorIsClicked = true;
    if (operator.className.includes('add')) {
      operation = '+';
    } else if (operator.className.includes('substract')) {
      operation = '-';
    } else if (operator.className.includes('divide')) {
      operation = '/';
    } else if (operator.className.includes('multiply')) {
      operation = '*';
    }
  });
});

clear.addEventListener('click', () => {
  operatorIsClicked = false;
  firstNumber = '';
  secondNumber = '';
  display.textContent = '';
});

let result;

equal.addEventListener('click', () => {
  if (parsed && !isNaN(parsed[0])) {
    result = Number(parsed[0]);
    console.log(result);

    for (let i = 1; i < newLalaStr.length - 1; i++) {
      if ('+-*/'.includes(parsed[i]) && !isNaN(parsed[i + 1])) {
        result = operate(parsed[i], result, Number(parsed[i + 1]));
        console.log(parsed[i], result, parsed[i + 1]);
      }
    }
    console.log(result);

    display.textContent = result;
  }
});

let lalaArr = [];
let parsed;
let newLalaStr;

lalas.forEach((lala) => {
  lala.addEventListener('click', () => {
    lalaArr.push(lala.id);
    newLalaStr = lalaArr.join('');

    console.log(newLalaStr);

    regex = /\d+|[-+\*\/]/g;
    parsed = newLalaStr.match(regex);

    console.log(parsed);

    return parsed, newLalaStr;
  });
});
