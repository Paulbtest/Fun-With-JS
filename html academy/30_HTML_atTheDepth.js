// HTML Academy. Испытание: "На глубине"

let calculatePressure = function (density, depth) {
    let pressure = Math.round(density * 9.8 * depth);

    return pressure;
};


/* Техническое задание

Мяу! Напиши функцию calculatePressure, которая будет считать давление на глубине и возвращать это значение из функции.

Формула расчёта такая: давление = плотность жидкости * ускорение свободного падения * глубина.

У calculatePressure должно быть два параметра: плотность жидкости и глубина. Названия параметров могут быть любыми.

Ускорение свободного падения записывать в параметры не нужно. В формуле можно использовать среднее фиксированное значение — 9.8.

Результат вычислений округляй с помощью Math.round.

*/