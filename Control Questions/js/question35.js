let firstNumber = Number(prompt("Введите первое число: "));
let secondNumber = Number(prompt("Введите второе число: "));
let isTrue = false;

if (isNaN(firstNumber) || isNaN(secondNumber)){
    console.log("Ошибка. Одно из введенных значений не является числом")
} else {
    
    if (firstNumber === secondNumber) {
        isTrue = true;
    };
};

console.log(isTrue);

/* Сделайте функцию, которая параметрами принимает 2 числа.Если эти числа равны - пусть
функция вернет true, а если не равны - false.
 */