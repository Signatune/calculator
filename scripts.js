const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

let stored, operator;
let equalsStored;

let display = document.querySelector("div.display > output");
display.textContent = "0";
let lastPressed = "number";

const operate = (a, b, operator) => {
  return operations[operator](a, b);
};

const appendDisplay = (digit) => {
  let newDisplay =
    display.textContent == "0" ? digit : display.textContent + digit;

  display.textContent = newDisplay;
};

const clearDisplay = () => {
  display.textContent = "0";
};

const clearAll = () => {
  clearDisplay();
  stored = null;
  operator = null;
};

const getDisplayVal = () => {
  return Number.parseInt(display.textContent);
};

let numberButtons = document.querySelectorAll("button.number");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendDisplay(Number.parseInt(button.id));
    lastPressed = "number";
  });
});

let clear = document.getElementById("clear");

clear.addEventListener("click", clearAll);

let operators = document.querySelectorAll("button.operator");

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    if (lastPressed == "operator") {
      operator = operatorButton.id;
    } else {
      stored = getDisplayVal();
      display.textContent = "0";
      operator = operatorButton.id;
    }

    console.table({
      stored: stored,
      display: getDisplayVal(),
      op: operator,
    });

    lastPressed = "operator";
  });
});

let equals = document.getElementById("equals");

equals.addEventListener("click", (e) => {
  let displayVal = getDisplayVal();

  if (lastPressed == "equals") {
    display.textContent = operate(displayVal, equalsStored, operator);
  } else {
    let result = operate(stored, displayVal, operator);
    equalsStored = displayVal;
    display.textContent = result;
  }

  lastPressed = "equals";

  console.table({
    stored: stored,
    display: getDisplayVal(),
    op: operator,
    equals: equalsStored,
  });
});
