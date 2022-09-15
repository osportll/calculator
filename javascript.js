let display = document.querySelector('#display');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let operators = document.querySelectorAll('.ope');
let numbers = document.querySelectorAll('.numbers');
let sum = document.querySelector('.add');
let subs = document.querySelector('.substract');
let division = document.querySelector('.divide');
let mult = document.querySelector('.multiply');

let chainOp = document.querySelectorAll('.chain-op');

let numberIsClicked = false;
let result;
console.log(result);

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    numberIsClicked = true;
    console.log(numberIsClicked);
  });
});

function add(...args) {
  return args.reduce((x, y) => {
    return x + y;
  });
}

function substract(...args) {
  return args.reduce((x, y) => {
    return x - y;
  });
}

function divide(...args) {
  return args.reduce((x, y) => {
    return x / y;
  });
}

function multiply(...args) {
  return args.reduce((x, y) => {
    return x * y;
  });
}

let operateResult;
let operationIsDone = false;

function operate(operator, num1, num2) {
  operationIsDone = true;

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

let operation;
let operatorIsClicked = false;

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
  opArr = [];
  display.textContent = '0';
  numberIsClicked = false;
});

let equalIsClicked = false;

equal.addEventListener('click', () => {
  if (numberIsClicked && operationIsDone) {
    equalIsClicked = true;
    opArr = [];
    opArr.push(result);
    let roundedResult = Math.round(result * 100) / 100;
    display.textContent = roundedResult;
  }
});

let opArr = [];
let parsed;
let newOpStr;

chainOp.forEach((ope) => {
  ope.addEventListener('click', () => {
    if (numberIsClicked) {
      opArr.push(ope.id);

      newOpStr = opArr.join('');

      let regex = /\d+|[-+\*\/]/g;
      parsed = newOpStr.match(regex);
      console.log(parsed);

      if (parsed && !isNaN(parsed[0])) {
        result = Number(parsed[0]);

        for (let i = 1; i < newOpStr.length - 1; i++) {
          if ('+-*/'.includes(parsed[i]) && !isNaN(parsed[i + 1])) {
            result = operate(parsed[i], result, Number(parsed[i + 1]));
          }
        }
      }

      for (let i = 0; i < parsed.length; i++) {
        if (!'+-*/'.includes(parsed[i])) {
          display.textContent = parsed[i];
        } else if (i > 1 && operatorIsClicked) {
          display.textContent = result;
        }
      }

      return parsed, newOpStr;
    }
  });
});
