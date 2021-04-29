// HTML Academy. Испытание: "Переводчик"

let daysOfWeek = {
    'понедельник': 'monday',
    'вторник': 'tuesday',
    'среда': 'wednesday',
    'четверг': 'thursday',
    'пятница': 'friday',
    'суббота': 'saturday',
    'воскресенье': 'sunday'
};


let translate = function (russianWord, dictionary) {

    return russianWord + ' по-английски: ' + dictionary[russianWord];

};


translate('понедельник', daysOfWeek);

/*

Напиши программу-переводчик.

Создай функцию translate с двумя параметрами.

Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.

Второй параметр — объект с данными, в котором хранится перевод слов.

Функция должна возвращать строку вида: 'понедельник по-английски: monday'.

*/