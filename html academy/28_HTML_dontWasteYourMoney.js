// HTML Academy. Испытание: "Не трать деньги понапрасну"

let getPrice = function (time, isUrgent) {
    
    let rate = 1500;

    if (isUrgent) {
        time /= 2;
        rate *= 2.5;
    }

    if (time > 150) {
        rate -= 250;
    };

    return time * rate;
};


let getProfitableProject = function (time, urgentProfit) {
    
    let regularCost = getPrice(time, false);
    let urgentCost = getPrice(time, true) - urgentProfit;

    if (urgentCost < regularCost) {
        return 'Выгодней срочный проект. Потратишь на него ' + urgentCost;
    } else {
        return 'Выгодней обычный проект. Потратишь на него ' + regularCost;
    };
};


/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/