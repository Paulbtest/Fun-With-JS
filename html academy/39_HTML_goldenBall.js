// HTML Academy. Испытание: "Золотой мяч"

let playerOne = {
    name: 'Васька',
    goals: 3,
    passes: 2
};

let playerTwo = {
    name: 'Байт',
    goals: 10,
    passes: 1
};

let playerThree = {
    name: 'Снежок',
    goals: 2,
    passes: 14
};

let playerList = [playerOne, playerTwo, playerThree];

let getStatistics = function (players) {

    let goalSum = 0;

    for (let i = 0; i < players.length; i++) {

        goalSum += players[i].goals;

    };

    for (let j = 0; j < players.length; j++) {
        let coefficient = players[j].goals * 2 + players[j].passes;
        players[j].coefficient = coefficient;

        let goalPercent = Math.round((players[j].goals * 100) / goalSum);
        players[j].percent = goalPercent;
    };

    return players;
};


getStatistics(playerList);

/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/
