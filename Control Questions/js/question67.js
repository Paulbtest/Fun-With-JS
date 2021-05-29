let userArr = ['hi', 'test', 'array', 'promo'];

let inArray = function(text, array) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(text) > -1) {
            flag = true;
        }
    };

    return flag;
}

console.log(inArray('test', userArr));

/* Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом
или нет.Функция первым параметром должна принимать текст элемента, а вторым -
массив, в котором делается поиск.Функция должна возвращать true или false. */