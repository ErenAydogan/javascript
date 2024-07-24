//alert('This is an alert for test!');

/* let currentResult;
console.log(currentResult);
currentResult = 0;
currentResult = (currentResult + 10) * 3 / 2 - 1;
console.log(currentResult); */

function add(num1, num2)
{
    return num1+num2
}

console.log(add(2,4))
console.log(add(7,5))


let defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '('+`${defaultResult}`+' + 10) * 3 / 2 - 1';
let errorMessage = 'An error occurred';


outputResult(currentResult, errorMessage);