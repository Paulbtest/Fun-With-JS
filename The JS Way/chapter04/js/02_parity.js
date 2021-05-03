let userNumber = Number(prompt("Please enter a number."));
let currentNumber = userNumber;

if (isNaN(userNumber)) {
    console.log("Invalid input. Please try again.")
} else {
    while (currentNumber < userNumber + 10) {
        if (currentNumber % 2 === 0) {
            console.log(`${currentNumber} is even`);
        }
        if (currentNumber % 2 !== 0) {
            console.log(`${currentNumber} is odd`);
        };
        currentNumber++;
    };
};

// for solution

/* let userNumber = Number(prompt("Please enter a number."));

if (isNaN(userNumber)) {
    console.log("Invalid input. Please try again.")
} else {
    for (let i = userNumber; i <= userNumber + 9; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
        if (i % 2 !== 0) {
            console.log(`${i} is odd`);
        };
    };
}; */

// Check the following program that shows even numbers(divisible by 2) between 1 and 10.

/* for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
}

Improve the program so that it also shows odd numbers.Improve it again to replace the initial
number 1 by a number given by the user.
This program must show exactly 10 numbers including the first one, not 11 numbers! */