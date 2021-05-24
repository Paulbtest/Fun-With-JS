let userNumber = Number(prompt("Введите число: "));

const isNumberInRange = function(number) {
    let flag = false;

    if (number > 0 && number < 10) {
        flag = true;
    };

    return flag;
};

console.log(isNumberInRange(userNumber));

/* Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так
- false. */