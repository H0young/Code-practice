function binaryOperator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "^":
      return Math.pow(a, b);
    default:
      return NaN;
  }
}
console.log(binaryOperator(2, 3, "+"));
console.log(binaryOperator(2, 3, "-"));
console.log(binaryOperator(2, 3, "*"));
console.log(binaryOperator(2, 3, "/"));
console.log(binaryOperator(2, 3, "%"));
console.log(binaryOperator(2, 3, "^"));
console.log(binaryOperator(2, 3, "eas"));
