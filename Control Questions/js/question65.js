let arrayFill = function(value, quantity) {
    let createArray = [];

    for (let i = 0; i < quantity; i++) {
        createArray.push(value);
    };

    return createArray;
};

console.log(arrayFill('x', 5));

/* Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым -
сколько элементов должно быть в массиве.Пример: arrayFill('x', 5) сделает массив['x', 'x', 'x',
'x', 'x']. */