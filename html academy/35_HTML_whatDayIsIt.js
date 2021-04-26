// HTML Academy. Испытание: "Какой сегодня день?"

let getDayOfWeek = function (firstDayName, dateDay) {
    let daysOfTheWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    let startingDay = firstDayName;
    let monthDaysArr = [];

    for (let i = daysOfTheWeek.indexOf(startingDay); i < daysOfTheWeek.length; i++) {
        monthDaysArr.push(daysOfTheWeek[i]);
    }

    while (monthDaysArr.length < 31) {
        for (let j = 0; j < daysOfTheWeek.length; j++) {
            monthDaysArr.push(daysOfTheWeek[j]);
        }
    };

    return monthDaysArr[dateDay - 1];

};

getDayOfWeek('вторник', 15);

/* Техническое задание

Мяу! Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием дня недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/
