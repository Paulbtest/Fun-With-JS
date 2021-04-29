// HTML Academy. Испытание: "Сортировка объектов"

let objectArray = [{ "name": "Василий", "age": 6 }, { "name": "Виктор", "age": 4 }, { "name": "Пётр", "age": 8 }, { "name": "Иннокентий", "age": 1 }];

let getSortedArray = function (array, keyName) {


    for (let i = 0; i <= array.length - 2; i++) {
        let minValue = array[i];

        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[j][keyName] < array[i][keyName]) {

                minValue = array[j];
                let swap = array[i];
                array[i] = minValue;
                array[j] = swap;
            }
        };
    };

    return array;
};

getSortedArray(objectArray, "age");

/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/
