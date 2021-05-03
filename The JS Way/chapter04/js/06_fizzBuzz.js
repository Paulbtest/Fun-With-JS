let number = 1;

while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    };
    number++;
};


/* Write a program that shows all numbers between 1 and 100 with the following exceptions:
• It shows "Fizz" instead if the number is divisible by 3.
• It shows "Buzz" instead if the number is divisible by 5 and not by 3.
When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible
both by 3 and by 5. */