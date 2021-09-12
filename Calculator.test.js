const Calculator = require("./Calculator");
const calculator = require("./Calculator");
test("add 2 postive numbers ", () => {
  const num1 = 7;
  const num2 = 8;
  const calculator = new Calculator();

  const result = calculator.add(num1, num2);
  expect(result).toBe(15);
});

test("add 2 negative numbers ", () => {
  const num1 = -7;
  const num2 = -8;
  const calculator = new Calculator();

  const result = calculator.add(num1, num2);
  expect(result).toBe(-15);
});
