let numberA = Number(prompt("Введите первое число: "));
let numberB = Number(prompt("Введите второе число: "));
let numberC = Number(prompt("Введите третье число: "));

let calculateNumbers = function(numberA, numberB, numberC) {
    return (numberA - numberB) / numberC;
};

console.log(calculateNumbers(numberA, numberB, numberC));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.