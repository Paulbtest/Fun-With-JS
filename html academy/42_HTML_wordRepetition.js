// HTML Academy. Испытание: "Повторы слов"

let testArray = ["Василий", "Пётр", "Иннокентий", "Пётр", "Иван", "Василий"]

let getRepeats = function (array) {
    let repeats = {};

    for (let i = 0; i < array.length; i++) {

        let currentWord = array[i];

        repeats[currentWord] = 1;

        for (let j = 0; j < array.length; j++) {

            if (array[i] === array[j] && j !== i) {

                repeats[currentWord]++
            };
        };
    }

    return repeats;
};


getRepeats(testArray);

/*

В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.

Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.

Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.


*/
