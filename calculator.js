const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(expression) {
  // Regular expression to match valid expressions with negative integers
  const regex = /^(-?[1-9]|-?10) ([+\-*\/]) (-?[1-9]|-?10) ([+\-*]) (-?[1-9]|-?10)$/;

  // Check if the expression matches the valid pattern
  if (!regex.test(expression)) {
    throw new Error('Invalid input. Please provide a valid expression.');
  }

  // Split the expression into operands and operators
  const [numA, operator1, numB, operator2, numC] = expression.split(' ');

  // Convert operands to integers
  const intA = parseInt(numA, 10);
  const intB = parseInt(numB, 10);
  const intC = parseInt(numC, 10);

  // Perform the calculation based on the operators
  switch (operator1) {
    case '+':
      switch (operator2) {
        case '-':
          return intA + intB - intC;
        case '+':
          return intA + intB + intC;
        case '*':
          return intA + intB * intC;
        case '/':
          return intA + intB / intC;
        default:
          throw new Error('Invalid operator.');
      }
    case '-':
      switch (operator2) {
        case '+':
          return intA - intB + intC;
        case '-':
          return intA - intB - intC;
        case '*':
          return intA - intB * intC;
        case '/':
          return intA - intB / intC;
        default:
          throw new Error('Invalid operator.');
      }
    case '*':
      switch (operator2) {
        case '-':
          return intA * intB - intC;
        default:
          throw new Error('Invalid operator.');
      }
    case '/':
      switch (operator2) {
        case '*':
          return intA / intB * intC;
        default:
          throw new Error('Invalid operator.');
      }
    default:
      throw new Error('Invalid operator.');
  }
}

rl.question('Enter a valid expression (e.g., 2 + 3 - 1): ', (userInput) => {
  try {
    const result = calculate(userInput);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
});
