let userString = '123456';

function reverseString (string) {
    const reversed = string.split('').reverse().join('');
    return console.log(reversed);
}

reverseString(userString);

// Дана строка, например, '123456'.Переверните эту строку(сделайте из нее '654321') не используя цикл.