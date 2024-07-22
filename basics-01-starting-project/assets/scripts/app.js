//alert('This is an alert for test!');

/* let currentResult;
console.log(currentResult);
currentResult = 0;
currentResult = (currentResult + 10) * 3 / 2 - 1;
console.log(currentResult); */
let defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '('+`${defaultResult}`+' + 10) * 3 / 2 - 1'


outputResult(currentResult, calculationDescription)