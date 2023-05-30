let firstOperand, currentOperator;
let shouldClearScreen = false;

let display = document.querySelector("div.display > output");
let equals = document.getElementById("equals");
let numberButtons = document.querySelectorAll("button.number");
let operators = document.querySelectorAll("button.operator");
let clear = document.getElementById("clear");

clear.addEventListener("click", () => clearAll());
equals.addEventListener("click", () => evaluate());

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendDisplay(button.id));
});

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    setOperation(operatorButton.id);
  });
});

clearAll();

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function operate(a, b, operator) {
  return operations[operator](a, b);
}

function clearScreen() {
  display.textContent = "0";
  shouldClearScreen = false;
}

function getDisplayValue() {
  return Number.parseInt(display.textContent);
}

function clearAll() {
  clearScreen();
  firstOperand = null;
  operator = null;
  shouldClearScreen = false;
}

function appendDisplay(digit) {
  console.log("here");
  if (shouldClearScreen) clearScreen();
  let newDisplay =
    display.textContent == "0" ? digit : display.textContent + digit;

  display.textContent = newDisplay;
}

function setOperation(operator) {
  if (currentOperator != null) evaluate();
  firstOperand = getDisplayValue();
  currentOperator = operator;
  shouldClearScreen = true;
}

function evaluate() {
  if (currentOperator == null || shouldClearScreen) return;
  if (currentOperator == "divide" && getDisplayValue() == 0) {
    display.textContent = "NaN";
  } else {
    display.textContent = operate(
      firstOperand,
      getDisplayValue(),
      currentOperator
    );
  }
  currentOperator = null;
  shouldClearScreen = true;
}
