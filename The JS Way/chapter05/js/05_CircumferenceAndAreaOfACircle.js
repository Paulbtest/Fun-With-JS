let userRadius = Number(prompt("Please enter the radius of a circle"));

if (isNaN(userRadius)) {
    console.log("Invalid input.") 
} else {

    let calculateCircumference = function (radius) {

        return 2 * Math.PI * radius; //  L = 2 * π * R.
    };

    let calculateArea = function (radius) {
        return Math.PI * radius ** 2; // S=π⋅R2.
    };

    console.log(calculateCircumference(userRadius));
    console.log(calculateArea(userRadius));
};


/* Write a program containing two functions to calculate the circumference and area of a circle
defined by its radius.Test it using user input.
Here are some tips for solving this exercise:

• Circumference and area calculation formulas should be part of your secondary school
memories… Or a Google click away:)
• The value of number π(Pi) is obtained with Math.PI in JavaScript.
• You might want to use the exponentiation operator² ** to perform computations. */