let userNumber = Number(prompt("Введите число: "));


function sumDigits(number) {
    return (number - 1) % 9 + 1;
};

let sum = sumDigits(userNumber);

while (sumDigits(userNumber) > 9) {
    sum = sumDigits(userNumber);
    console.log(sum);
};

console.log(sum);


/* Дано число.Сложите его цифры.Если сумма получилась более 9 - ти, опять сложите его
цифры.И так, пока сумма не станет однозначным числом(9 и менее).
 */