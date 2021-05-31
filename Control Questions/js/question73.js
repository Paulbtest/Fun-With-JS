let userNumber = prompt("Введите число");

let getDigitsSum = function(number) {
    let sumOfDigits = 0;
    for (let i = 0; i < number.length; i++) {
        sumOfDigits += Number(number[i]);
    };

    return sumOfDigits;
};

console.log(getDigitsSum(userNumber));

/* Сделайте функцию getDigitsSum(digit - это цифра), которая параметром принимает целое
число и возвращает сумму его цифр.
 */