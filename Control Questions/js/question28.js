let userNumber = Number(prompt("Введите целое положительное двузначное число: "));

if (isNaN(userNumber)) {
    console.log("Ошибка. Введеное значение не является числом.")
} else if (userNumber < 0 || userNumber > 99 || !Number.isInteger(userNumber)) {
    console.log("Ошибка. Введеное значение не является целым, положительным или двузначным числом.")
} else {
    userNumber = String(userNumber);
    console.log(userNumber[1] + " " + userNumber[0]);
};

/* Напишите код, который принимает с клавиатуры целое положительное двузначное число и
выводит на экран его цифры, разделенные знаком «пробел» – но в обратном порядке.То
есть для числа 45 будет выведено на экран 5 4. */