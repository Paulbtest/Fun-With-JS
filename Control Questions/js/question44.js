let a = Number(prompt("Введите первое число: "));
let b = Number(prompt("Введите второе число: "));

if (a % b === 0) {
    console.log(`${a} делится на ${b} без остатка.`);
} else {
    console.log(`${a} делится на ${b} с остатком в ${a % b}.`);
};

/* Даны переменные a и b.Проверьте, что a делится без остатка на b.Если это так - выведите
'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
 */