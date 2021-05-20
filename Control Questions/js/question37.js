let numbersArray = [-3, 12, 45, -32, 14, 89, -9, 0, -12, 57, 42, 98, -100];
let positiveNumbersArr = [];

let isPositive = function(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    };
};

for (let i = 0; i < numbersArray.length; i++) {
    if (isPositive(numbersArray[i])) {
        positiveNumbersArr.push(numbersArray[i]);
    };
};

console.log(positiveNumbersArr);

/* Дан массив с числами.Создайте из него новый массив, где останутся лежать только
положительные числа.Создайте для этого вспомогательную функцию isPositive(), которая
параметром будет принимать число и возвращать true, если число положительное, и false -
    если отрицательное. */