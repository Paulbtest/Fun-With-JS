let userNumber = Number(prompt("Введите положительное или отричательное число: "));

let checkNegativeNumbers = function(number) {
    let flag = false;
    
    if (number < 0) {
        flag = true;
    };

    return flag;
};

console.log(checkNegativeNumbers(userNumber));

/* Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно
или нет.Если отрицательное - пусть функция вернет true, а если нет - false.
 */