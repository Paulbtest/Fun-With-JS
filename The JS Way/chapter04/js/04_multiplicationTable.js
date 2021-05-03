let userNumber = 0;

while (userNumber < 2 || userNumber > 9 || isNaN(userNumber)) {
        userNumber = Number(prompt("Enter a number between 2 and 9:"));
    };

    for (let i = 0; i <= 10; i++) {
        
        console.log(`${userNumber} * ${i} = ${userNumber * i}`);
    };

/* Write a program that asks the user for a number, then shows the multiplication table for this
number.
When you are done, improve the program so it only accepts numbers between 2 and 9(use the
previous exercise as a blueprint). */