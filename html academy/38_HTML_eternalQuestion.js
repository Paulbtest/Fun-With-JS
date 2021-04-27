// HTML Academy. Испытание: "Вечный вопрос"

let calculateDeposit = function (initialSum, yearlyPercent, depositTerm, isCapitalized) {
    let finalSum = initialSum;;
    let monthlyPercent = (yearlyPercent / 12) / 100;

    for (let i = 1; i <= depositTerm; i++) {
        if (!isCapitalized) {
            finalSum = monthlyPercent * depositTerm * initialSum + initialSum;
        } else {
            finalSum += finalSum * monthlyPercent;
        };
    };


    return Math.floor(finalSum);

};


let getProfitableDeposit = function (initialSum, depositTerm, regularPercent, capitalizedPercent) {

    let mostProfitableTerm;

    let regPercTotal = calculateDeposit(initialSum, regularPercent, depositTerm, false);

    let capPercTotal = calculateDeposit(initialSum, capitalizedPercent, depositTerm, true);

    if (regPercTotal > capPercTotal) {
        mostProfitableTerm = 'Выбирай обычный вклад. Получишь ' + regPercTotal;
    } else {
        mostProfitableTerm = 'Выбирай капитализацию. Получишь ' + capPercTotal;
    };

    return mostProfitableTerm;

};

getProfitableDeposit(10000, 9, 7, 6.8);

/* Техническое задание

Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я получу с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Получишь ' + доход от вклада.
'Выбирай капитализацию. Получишь ' + доход от вклада.

*/
