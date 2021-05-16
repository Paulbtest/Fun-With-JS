let userNumber = Number(prompt("Введите целое положительное трехзначное число: "));

if (isNaN(userNumber)) {
    console.log("Ошибка. Введеное значение не является числом.")
} else if (userNumber < 0 || userNumber <= 99 || userNumber > 999 || !Number.isInteger(userNumber)) {
    console.log("Ошибка. Введеное значение не является целым, положительным или трехзначным числом.")
} else {
    userNumber = String(userNumber);
    console.log(userNumber[0] + " " + userNumber[1] + " " + userNumber[2]);
};


/* Напишите код, который принимает с клавиатуры целое положительное трехзначное число и
выводит на экран его цифры, разделенные знаком «пробел». */