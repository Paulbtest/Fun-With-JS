let firstNumber = Number(prompt("Please enter the first number."));
let secondNumber = Number(prompt("Please enter the second number."));

// switch solution

switch (true) {
    case (firstNumber > secondNumber):
        console.log(`${firstNumber} is greater than ${secondNumber}.`);
        break;
    case (firstNumber === secondNumber):
        console.log(`${firstNumber} is equal to ${secondNumber}.`);
        break;
    case (firstNumber < secondNumber):
        console.log(`${firstNumber} is less than ${secondNumber}.`);
        break;
    default:
        console.log(`Invalid input. Please try again.`);
}



// if solution

/* if (firstNumber > secondNumber) {
    console.log(`${firstNumber} is greater than ${secondNumber}.`);
} else if (firstNumber === secondNumber) {
    console.log(`${firstNumber} is equal to ${secondNumber}.`);
} else if (firstNumber < secondNumber) {
    console.log(`${firstNumber} is less than ${secondNumber}.`);
} else {
    console.log(`Invalid input. Please try again.`);
} */

/* Write a program that accepts two numbers, then compares their values and displays an
appropriate message in all cases. */
