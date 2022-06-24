// basic arithmetic calculator


// prompt the user for the first number
const number1 = parseFloat(prompt('Enter first number: '));

// prompt the user to choose arithmetic operator
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// prompt the user for the next number
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);