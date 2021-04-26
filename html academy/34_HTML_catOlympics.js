// HTML Academy. Испытание: "Олимпиада для котов"

let digit = function (number) { 
    let figures = "" + number;
    let sum = 0;

    for (let i = 0; i < figures.length; i++)
        sum += +figures[i];

    return sum;
}

let getYears = function (startYear, endYear, sumOfNumbers) { 
    let yearArray = [];
    let approvedYearsArr = [];

    for (let i = startYear; i < endYear; i++) {
        yearArray.push(startYear);
        yearArray.push(startYear += 1);

        for (let j = 0; j < yearArray.length; j++) {
            let currentSum = digit(yearArray[j]);

            if (currentSum === sumOfNumbers && approvedYearsArr.includes(yearArray[j]) === false) {

                approvedYearsArr.push(yearArray[j]);

            };
        };

    };

    return approvedYearsArr;
};

getYears(2018, 2045, 11);

/* Техническое задание

Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

*/
