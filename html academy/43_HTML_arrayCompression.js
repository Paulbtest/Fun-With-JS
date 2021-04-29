// HTML Academy. Испытание: "Сжатие массивов"

let testArrayKey = ["color", "height", "weight", "depth"];
let testArrayValue = ["чёрный", "100", "50", "20"];

let getZippedArrays = function (arrKey, arrValue) {

    let zippedArrays = {};

    for (let i = 0; i < arrKey.length; i++) {

        let currentKey = arrKey[i];
        zippedArrays[currentKey] = arrValue[i];

    };

    return zippedArrays;
};

getZippedArrays(testArrayKey, testArrayValue);

/*

Создайте функцию getZippedArrays.

У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.

Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.

*/


