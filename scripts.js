const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let numA, numB, operator;

const operate = (a, b, operator) => {
  return operations[operator](a, b);
};
