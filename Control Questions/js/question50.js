let numberOne = Number(prompt("Введите первое число: "));
let numberTwo = Number(prompt("Введите второе число: "));

const compareSum = function (numA, numB) {
    let flag = false;

    if (numA + numB > 10) {
        flag = true;
    }

    return flag;
};

console.log(compareSum(numberOne, numberTwo));

/* Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 -
пусть функция вернет true, а если нет - false */