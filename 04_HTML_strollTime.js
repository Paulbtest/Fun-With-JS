// HTML Academy, испытание: Длительность прогулки

let temperature = 38;
let itsRaining = false;
const IDEAL_TEMP = 20;

let minutes;

if (itsRaining) {
    minutes = 0;
} else if (temperature < 0 || temperature > 35) {
    minutes = 0;
} else {
    if (temperature === 20) {
        minutes = 20;
    } else if (temperature < 20) {
        minutes = (temperature - IDEAL_TEMP) + IDEAL_TEMP;
    } else if (temperature > 20) {
        minutes = IDEAL_TEMP - (temperature - IDEAL_TEMP);
    }
};


/* Техническое задание

Мяу! Длительность прогулки зависит от нескольких условий.

Во-первых, если идёт дождь, прогулка не может состояться. В этом случае длительность прогулки должна равняться 0.

Во-вторых, если температура слишком низкая (ниже 0°C) или слишком высокая (выше 35°C), прогулка тоже не состоится.

В-третьих, идеальная температура для прогулки — 20°C. В этом случае прогулка длится 20 минут.

В остальных случаях длительность прогулки уменьшается на минуту с каждым градусом отклонения от идеальной температуры: при 19°C или 21°C длительность составит 19 минут, при 18°C или 22°C — 18 минут и так далее.

*/
