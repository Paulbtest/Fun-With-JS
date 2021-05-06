let initialDeposit = Number(prompt("Введите сумму вклада:"));
let percent = Number(prompt("Введите процент:"));

for (let i = 1; i <= 5; i++) {
    
    let yearlyProfit = initialDeposit * percent / 100;
    initialDeposit += yearlyProfit
    console.log(`Размер вклада за ${i} год составляет` + (Math.round(initialDeposit)));
};

/* Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.
 */