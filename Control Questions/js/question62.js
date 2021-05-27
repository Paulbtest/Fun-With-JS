let arrNumbers = [3, 1, 5, 10, 10]
let flag = false;

for (let i = 1; i < arrNumbers.length; i++) {
    if (arrNumbers[i] === arrNumbers[i - 1]) {
        console.log("Да");
        flag = true;
        break;
    }; 
};

if (flag === false) {
    console.log("Нет");
};

/* Дан массив с числами.Проверьте, есть ли в нем два одинаковых числа подряд.Если есть -
выведите 'да', а если нет - выведите 'нет'.
 */