const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}



function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}


function add() {
  const userInputedNumber = getUserInput();
  const initResult = currentResult;
  currentResult = currentResult + userInputedNumber;
  createAndWriteOutput("+", initResult, userInputedNumber);

  writeToLog("ADD", initResult, userInputedNumber, currentResult);
}


function subtract(num1, num2) {
  const userInputedNumber = getUserInput();
  const initResult = currentResult;
  currentResult = currentResult - userInputedNumber;
  createAndWriteOutput("-", initResult, userInputedNumber);

  writeToLog("SUBTRACT", initResult, userInputedNumber, currentResult);
}


function multiply(num1, num2) {
  const userInputedNumber = getUserInput();
  const initResult = currentResult;
  currentResult = currentResult * userInputedNumber;
  createAndWriteOutput("*", initResult, userInputedNumber);
  writeToLog("MULTIPLY", initResult, userInputedNumber, currentResult);
}

function divide(num1, num2) {
  const userInputedNumber = getUserInput();
  const initResult = currentResult;
  currentResult = currentResult / userInputedNumber;
  createAndWriteOutput("/", initResult, userInputedNumber);

  writeToLog("DIVIDE", initResult, userInputedNumber, currentResult);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
  ) {
    const logEntry = {
      operation: operationIdentifier,
      previousResult: prevResult,
      number: operationNumber,
      result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
  }

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
