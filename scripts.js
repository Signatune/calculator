const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

let numA, numB, operator;

let display = document.querySelector("div.display > output");
display.textContent = "0";

const operate = (a, b, operator) => {
  return operations[operator](a, b);
};

const appendDisplay = (digit) => {
  let newDisplay =
    display.textContent == "0" ? digit : display.textContent + digit;

  display.textContent = newDisplay;
};

const clearAll = () => {
  display.textContent = "0";
  numA = null;
  numB = null;
  operator = null;
};

let numberButtons = document.querySelectorAll("button.number");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendDisplay(Number.parseInt(button.id));
  });
});

let clear = document.getElementById("clear");

clear.addEventListener("click", clearAll);

let operators = document.querySelectorAll("button.operator");

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    if (!numA) {
      numA = Number.parseInt(display.textContent);
      operator = operatorButton.id;
      display.textContent = "0";
    } else {
      numB = Number.parseInt(display.textContent);
      let result = operate(numA, numB, operator);
      operator = operatorButton.id;
      display.textContent = result;
    }
  });
});

let equals = document.getElementById("equals");

equals.addEventListener("click", (e) => {
  let currentValue = Number.parseInt(display.textContent);

  if (numA && numB) {
    let result = operate(currentValue, numB, operator);
    display.textContent = result;
  } else {
    let result = operate(numA, currentValue, operator);
    numB = currentValue;

    display.textContent = result;
  }
});
