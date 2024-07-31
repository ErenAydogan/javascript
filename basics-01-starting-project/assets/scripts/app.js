const defaultResult = 0;
let currentResult = defaultResult;

const resetUserNumberInput = () =>
{
    userInput.value = null
}
const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

const add = () => {   
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, `${calcDescription}`);
    resetUserNumberInput();
}

const subtract = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, `${calcDescription}`);
    resetUserNumberInput();
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
    resetUserNumberInput();
}

const devide = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);