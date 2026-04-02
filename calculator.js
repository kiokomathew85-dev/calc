const calculationHistory = [];

// Function to add a calculation to history
function addToHistory(num1, num2, operator, result) {
  const calculation = {
    operand1: num1,
    operand2: num2,
    operator: operator,
    result: result
  };

  calculationHistory.push(calculation);
}

// Addition function
function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, num2, "+", result);
  return result;
}

// Subtraction function
function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, num2, "-", result);
  return result;
}

// Multiplication function
function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, num2, "*", result);
  return result;
}

// Division function
function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero");
    return null;
  }

  const result = num1 / num2;
  addToHistory(num1, num2, "/", result);
  return result;
}

// Function to display calculation history
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations yet.");
    return;
  }

  console.log("=== Calculation History ===");
  calculationHistory.forEach((calc, index) => {
    console.log(
      `${index + 1}: ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`
    );
  });
}

console.log("Calculator Test Results:\n");

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(6, 2));
console.log("Division:", divide(8, 2));
console.log("Division by zero:", divide(10, 0)); // error case

console.log("\n");

// Display history
displayHistory();