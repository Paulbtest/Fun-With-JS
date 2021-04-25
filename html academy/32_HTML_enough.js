// HTML Academy. Испытание: "Достаточно"

let getDiet = function (dishCaloriesArray, calorieDailyLimit) {
    let totalDishes = 0;
    let calories = 0;

    while (calories + dishCaloriesArray[totalDishes] <= calorieDailyLimit) {

        calories += dishCaloriesArray[totalDishes];
        totalDishes++;
    }

    return totalDishes;
};


/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.

Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.

Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/
