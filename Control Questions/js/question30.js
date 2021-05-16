let userNumber = Number(prompt("Введите целое положительное трехзначное число: "));

if (isNaN(userNumber)) {
    console.log("Ошибка. Введеное значение не является числом.")
} else if (userNumber < 0 || userNumber <= 99 || userNumber > 999 || !Number.isInteger(userNumber)) {
    console.log("Ошибка. Введеное значение не является целым, положительным или трехзначным числом.")
} else {
    userNumber = String(userNumber);
    console.log(userNumber[0] + "00" + " " + userNumber[1] + "0" + " " + userNumber[2]);
};

/* Напишите код, который принимает с клавиатуры целое положительное трехзначное число и
выводит его на экран в «полном виде»: например, для числа 364 это будет выглядеть как
300 60 4. */