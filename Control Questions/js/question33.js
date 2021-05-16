let userMessage = prompt("Введите слово или текстовое сообщение с маленькой буквы.").toLowerCase();
// Первое решение

/* let firstHalf = userMessage[0].toUpperCase();
let secondHalf = userMessage.slice(1, userMessage.length);

userMessage = firstHalf + secondHalf; */

// Второе решение

let uppercasify = function (message) {
    return message.charAt(0).toUpperCase() + message.slice(1);
}

console.log(uppercasify(userMessage));

/* Дана строка.Сделайте заглавным первый символ этой строки не используя цикл.Найдите
два решения. */