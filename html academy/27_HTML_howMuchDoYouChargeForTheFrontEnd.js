// HTML Academy. Испытание: "Сколько стоит ваш фронтенд?"

let getPrice = function (time, isUrgent) {
    let rate = 1500;

    if (isUrgent) {
        time /= 2;
        rate *= 2.5;
    }
    console.log(rate)

    if (time > 150) {
        rate -= 250;
    };

    return time * rate;
}

getPrice(200, true)

/* Техническое задание

Мяу! Напиши программу для расчёта стоимости проекта.

Назови функцию getPrice. У неё должно быть два параметра:

- время (в часах), которое нужно потратить на проект;
- булево значение, которое указывает на срочность проекта — true для срочного заказа и false для обычного.

Названия параметров могу быть любыми.

Для каждого проекта есть фиксированная ставка — 1500 рублей в час. Расчёт стоимости проектов выглядит так: время * ставка в час.

Есть несколько нюансов. Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.

А если время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.

В первую очередь проверяй срочность. Функция должна возвращать стоимость проекта.

*/
