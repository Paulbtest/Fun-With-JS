let userNumber = Number(prompt("Введите целое положительное двузначное число: "));

if (isNaN(userNumber)) {
    console.log("Ошибка. Введеное значение не является числом.")
} else if (userNumber < 0 || userNumber > 99 || !Number.isInteger(userNumber)) {
    console.log("Ошибка. Введеное значение не является целым, положительным или двузначным числом.")
} else {
    userNumber = String(userNumber);
    console.log(userNumber[0] + " " + userNumber[1]);
};

/* Напишите код, который принимает с клавиатуры целое положительное двузначное число и
выводит на экран его цифры, разделенные знаком «пробел».
 */