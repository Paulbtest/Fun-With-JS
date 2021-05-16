let userNumber = Number(prompt("Введите число: "));
let sum = 0;

if (isNaN(userNumber)) {
    console.log("Ошибка. Введенные данные не являются числом.") 
} else {
    
    userNumber = String(userNumber);

    for (let i = 0; i < userNumber.length; i++) {
        sum += Number(userNumber[i]);
    };

    console.log(sum);
};

/* Назовем «весом числа» сумму его цифр.Напишите код, который принимает от
пользователя число и выводит на экран его «вес». */